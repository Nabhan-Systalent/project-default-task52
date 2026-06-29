'use client';

import { useState } from 'react';
import { MemberListProps, WorkspaceMember } from './MemberList.types';

export const MemberList = ({ members, onRemoveMember, onUpdateRole, isLoading, error }: MemberListProps) => {
  if (isLoading) return <div className="p-4 text-center">Loading members...</div>;
  if (error) return <div className="p-4 text-center text-red-500">{error}</div>;
  if (!members.length) return <div className="p-4 text-center text-gray-500">No members found.</div>;

  return (
    <div className="overflow-hidden rounded-lg border border-gray-200">
      <table className="w-full text-sm text-left">
        <thead className="bg-gray-50 text-gray-700 uppercase font-medium">
          <tr>
            <th className="px-6 py-3">Member</th>
            <th className="px-6 py-3">Role</th>
            <th className="px-6 py-3">Action</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {members.map((member) => (
            <tr key={member.id}>
              <td className="px-6 py-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gray-200" />
                  <div>
                    <div className="font-medium">{member.name}</div>
                    <div className="text-gray-500">{member.email}</div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4">
                <select
                  value={member.role}
                  onChange={(e) => onUpdateRole(member.id, e.target.value as WorkspaceMember['role'])}
                  className="bg-transparent border-none focus:ring-0 cursor-pointer text-blue-600 font-semibold"
                >
                  <option value="admin">Admin</option>
                  <option value="editor">Editor</option>
                  <option value="viewer">Viewer</option>
                </select>
              </td>
              <td className="px-6 py-4">
                <button
                  onClick={() => onRemoveMember(member.id)}
                  className="text-red-600 hover:text-red-800 font-medium"
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
