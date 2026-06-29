export interface Project {
  id: string;
  name: string;
  description: string;
  updatedAt: string;
}

export interface ProjectListProps {
  projects: Project[];
  loading?: boolean;
  error?: string | null;
  onCreateClick: () => void;
}
