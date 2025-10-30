"use client"

import React, { useEffect, useState } from "react";

export type Filters = {
  industry: string[];
  education: string[];
  nationality: string[];
  languages: string[];
  status: string[];
};

type Props = {
  onChange?: (filters: Filters) => void;
  options?: Partial<Filters>;
};

const DEFAULT_OPTIONS: Filters = {
  industry: ["Technology", "Finance", "Healthcare", "Retail", "Education"],
  education: ["High School", "Associate", "Bachelor", "Master", "PhD"],
  nationality: ["United States", "Canada", "United Kingdom", "Germany", "India"],
  languages: ["English", "Spanish", "French", "German", "Mandarin"],
  status: ["Active", "Interviewing", "Hired", "Rejected", "On Hold"],
};

export default function CandidateFilter({ onChange, options }: Props) {
  const mergedOptions: Filters = { ...DEFAULT_OPTIONS, ...(options || {}) };

  const [filters, setFilters] = useState<Filters>({
    industry: [],
    education: [],
    nationality: [],
    languages: [],
    status: [],
  });

  useEffect(() => {
    if (onChange) onChange(filters);
  }, [filters, onChange]);

  function handleMultiSelect(key: keyof Filters, values: string[]) {
    setFilters((prev) => ({ ...prev, [key]: values }));
  }

  function toggleValue(key: keyof Filters, value: string) {
    setFilters((prev) => {
      const arr = prev[key];
      const exists = arr.includes(value);
      const next = exists ? arr.filter((v) => v !== value) : [...arr, value];
      return { ...prev, [key]: next };
    });
  }

  function clearAll() {
    setFilters({ industry: [], education: [], nationality: [], languages: [], status: [] });
  }

  const renderSelect = (label: string, key: keyof Filters) => {
    const opts = mergedOptions[key];
    return (
      <div className="form-control w-full">
        <label className="label">
          <span className="label-text">{label}</span>
          <span className="label-text">{filters[key].length ? `${filters[key].length} selected` : ""}</span>
        </label>
        <select
          multiple
          size={Math.min(6, opts.length)}
          className="select select-bordered w-full h-auto"
          value={filters[key]}
          onChange={(e) => {
            const selected = Array.from(e.target.selectedOptions).map((o) => o.value);
            handleMultiSelect(key, selected);
          }}
        >
          {opts.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>

        {filters[key].length > 0 && (
          <div className="flex flex-wrap gap-2 mt-2">
            {filters[key].map((v) => (
              <button
                key={v}
                type="button"
                className="badge badge-outline badge-primary"
                onClick={() => toggleValue(key, v)}
                title={`Remove ${v}`}
              >
                {v}
              </button>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="p-4 bg-base-100 rounded-lg shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-medium">Filters</h3>
        <div className="flex gap-2">
          <button className="btn btn-sm btn-ghost" onClick={clearAll}>
            Clear
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {renderSelect("Industry", "industry")}
        {renderSelect("Education", "education")}
        {renderSelect("Nationality", "nationality")}
        {renderSelect("Languages Spoken", "languages")}
        {renderSelect("Status", "status")}
      </div>
    </div>
  );
}
