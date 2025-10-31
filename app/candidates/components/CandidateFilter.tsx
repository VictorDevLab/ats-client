"use client";

import React, { useState } from "react";

type FilterOption = {
  label: string;
  value: string;
};

type FilterCategory = {
  name: string;
  key: keyof Filters;
  options: FilterOption[];
};

type Filters = {
  industry: string[];
  education: string[];
  nationality: string[];
  languages: string[];
  status: string[];
};

const FilterBar: React.FC = () => {
  const [filters, setFilters] = useState<Filters>({
    industry: [],
    education: [],
    nationality: [],
    languages: [],
    status: [],
  });

  const filterCategories: FilterCategory[] = [
    {
      name: "Industry",
      key: "industry",
      options: [
        { label: "IT", value: "it" },
        { label: "Finance", value: "finance" },
        { label: "Healthcare", value: "healthcare" },
        { label: "Education", value: "education" },
      ],
    },
    {
      name: "Education",
      key: "education",
      options: [
        { label: "PhD", value: "phd" },
        { label: "Doctorate", value: "doctorate" },
        { label: "Masters", value: "masters" },
        { label: "Bachelors", value: "bachelors" },
      ],
    },
    {
      name: "Nationality",
      key: "nationality",
      options: [
        { label: "Kenyan", value: "kenyan" },
        { label: "Ugandan", value: "ugandan" },
        { label: "Tanzanian", value: "tanzanian" },
        { label: "Nigerian", value: "nigerian" },
      ],
    },
    {
      name: "Languages Spoken",
      key: "languages",
      options: [
        { label: "English", value: "english" },
        { label: "Swahili", value: "swahili" },
        { label: "French", value: "french" },
        { label: "German", value: "german" },
      ],
    },
    {
      name: "Status",
      key: "status",
      options: [
        { label: "Available", value: "available" },
        { label: "Unavailable", value: "unavailable" },
      ],
    },
  ];

  const handleFilterChange = (key: keyof Filters, value: string) => {
    setFilters((prev) => {
      const currentValues = prev[key];
      const newValues = currentValues.includes(value)
        ? currentValues.filter((v) => v !== value)
        : [...currentValues, value];
      return { ...prev, [key]: newValues };
    });
  };

  const resetFilters = () => {
    setFilters({
      industry: [],
      education: [],
      nationality: [],
      languages: [],
      status: [],
    });
  };

  return (
    <div className="w-full bg-base-100 p-4 rounded-lg shadow-sm border border-base-300">
      <div className="flex flex-wrap gap-4 items-end">
        {filterCategories.map((category) => (
          <div key={category.key} className="dropdown dropdown-bottom">
            <label tabIndex={0} className="btn btn-outline w-48 justify-between rounded-lg">
              {category.name}
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              {category.options.map((opt) => (
                <li key={opt.value}>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      className="checkbox checkbox-sm"
                      checked={filters[category.key].includes(opt.value)}
                      onChange={() => handleFilterChange(category.key, opt.value)}
                    />
                    <span>{opt.label}</span>
                  </label>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <button onClick={resetFilters} className="btn btn-outline btn-error rounded-lg">
          Reset
        </button>
      </div>

      {/* Active Filters Display */}
      <div className="mt-4 flex flex-wrap gap-2">
        {Object.entries(filters).map(([key, values]) =>
          values.map((v) => (
            <div
              key={`${key}-${v}`}
              className="badge badge-primary gap-1 cursor-pointer"
              onClick={() => handleFilterChange(key as keyof Filters, v)}
            >
              {v}
              <span className="text-xs ml-1">✕</span>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default FilterBar;
