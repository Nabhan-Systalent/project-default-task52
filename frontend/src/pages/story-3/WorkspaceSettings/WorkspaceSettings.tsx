'use client';

import { useState } from 'react';
import { WorkspaceSettingsProps } from './WorkspaceSettings.types';
import { MemberList } from './MemberList';
import { WorkspaceMember } from './MemberList.types';

export const WorkspaceSettings = ({ initialMembers = [] }: WorkspaceSettingsProps) => {
  const [members, setMembers] = useState<WorkspaceMember[]>(initialMembers);

  const handleRemoveMember = (id: string) => {
    setMembers((prev) => prev.filter((m) => m.id !== id));
  };

  const handleUpdateRole = (id: string, role: WorkspaceMember['role']) => {
    setMembers((prev) => prev.map((m) => (m.id === id ? { ...m, role } : m)));
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Workspace Settings</h1>
        <p className="text-gray-600">Manage your team members and their roles.</p>
      </div>
      
      <section>
        <h2 className="text-lg font-semibold mb-4">Members</h2>
        <MemberList 
          members={members} 
          onRemoveMember={handleRemoveMember} 
          onUpdateRole={handleUpdateRole} 
        />
      </section>
    </div>
  );
};
