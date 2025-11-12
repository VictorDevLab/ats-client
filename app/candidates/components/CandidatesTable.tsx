"use client";

import React, { useState } from "react";

type User = {
  id: number;
  name: string;
  country: string;
  company: string;
  jobTitle: string;
  color: string;
  avatar: string;
};

type Props = {
  users: User[];
};

function CandidatesTable({ users }: Props) {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const openDetails = (user: User) => setSelectedUser(user);
  const closeDetails = () => setSelectedUser(null);

  return (
    <div>
      <div className="card mt-6 bg-base-100 shadow-sm">
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <th>Name</th>
                <th>Job</th>
                <th>Favorite Color</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <th>
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img src={user.avatar} alt={user.name} />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{user.name}</div>
                        <div className="text-sm opacity-50">{user.country}</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    {user.company}
                    <br />
                    <span className="badge badge-ghost badge-sm">
                      {user.jobTitle}
                    </span>
                  </td>
                  <td>{user.color}</td>
                  <th>
                    <button
                      className="btn btn-ghost btn-xs"
                      onClick={() => openDetails(user)}
                    >
                      view details
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Drawer / Slide-in details panel */}
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-40 transition-opacity duration-200 ${
          selectedUser
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!selectedUser}
      >
        <div className="absolute inset-0 bg-black/40" onClick={closeDetails} />
      </div>

      <aside
        className={`fixed top-0 right-0 z-50 h-full w-80 max-w-full bg-base-100 shadow-xl transform transition-transform duration-300 ease-in-out ${
          selectedUser ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!selectedUser}
      >
        <div className="p-6 h-full flex flex-col">
          <div className="flex items-start justify-between">
            <h3 className="text-lg font-semibold">Candidate details</h3>
            <button className="btn btn-ghost btn-sm" onClick={closeDetails}>
              ✕
            </button>
          </div>

          {selectedUser ? (
            <div className="mt-6 overflow-y-auto">
              <div className="flex items-center gap-4">
                <div className="avatar">
                  <div className="mask mask-squircle h-20 w-20">
                    <img src={selectedUser.avatar} alt={selectedUser.name} />
                  </div>
                </div>
                <div>
                  <div className="text-xl font-bold">{selectedUser.name}</div>
                  <div className="text-sm opacity-60">
                    {selectedUser.jobTitle}
                  </div>
                  <div className="text-sm opacity-50">
                    {selectedUser.company}
                  </div>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-1 gap-3 text-sm">
                <div>
                  <div className="opacity-60 text-xs">Country</div>
                  <div>{selectedUser.country}</div>
                </div>
                <div>
                  <div className="opacity-60 text-xs">Favorite color</div>
                  <div>{selectedUser.color}</div>
                </div>
              </div>

              {/* Placeholder for more details */}
              <div className="mt-6">
                <div className="opacity-60 text-xs">Notes</div>
                <p className="text-sm mt-2 text-neutral">
                  No extra notes available. You can extend this area with more
                  candidate fields (email, phone, CV link, skills, etc.).
                </p>
              </div>
            </div>
          ) : (
            <div className="mt-6">No selection</div>
          )}

          <div className="mt-auto">
            <button className="btn btn-primary w-full" onClick={closeDetails}>
              Close
            </button>
          </div>
        </div>
      </aside>
    </div>
  );
}

export default CandidatesTable;
