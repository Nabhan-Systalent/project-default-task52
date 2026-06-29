'use client';

import React from 'react';
import { ProjectListProps } from './ProjectManager.types';

export const ProjectManager: React.FC<ProjectListProps> = ({ 
  projects, 
  loading, 
  error, 
  onCreateClick 
}) => {
  if (loading) {
    return (
      <div className="p-8 text-center text-[var(--color-text-secondary)]">
        Loading projects...
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-8 text-center text-[var(--color-error)]">
        {error}
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6 p-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-[var(--color-text-primary)]">Projects</h1>
        <button 
          onClick={onCreateClick}
          className="px-4 py-2 bg-[var(--color-primary)] text-[var(--color-white)] rounded hover:opacity-90 transition-opacity"
        >
          Create Project
        </button>
      </div>

      {projects.length === 0 ? (
        <div className="p-12 border-2 border-dashed border-[var(--color-border)] rounded-lg text-center text-[var(--color-text-secondary)]">
          No projects found. Create one to get started.
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="p-4 border border-[var(--color-border)] rounded-lg hover:shadow-md transition-shadow bg-[var(--color-bg-secondary)]"
            >
              <h3 className="font-semibold text-[var(--color-text-primary)] mb-2">{project.name}</h3>
              <p className="text-sm text-[var(--color-text-secondary)] mb-4 line-clamp-2">
                {project.description}
              </p>
              <span className="text-xs text-[var(--color-text-tertiary)]">
                Last updated: {new Date(project.updatedAt).toLocaleDateString()}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
