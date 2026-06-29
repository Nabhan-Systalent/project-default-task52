export interface WorkspaceMember {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'editor' | 'viewer';
  avatarUrl?: string;
}

export interface MemberListProps {
  members: WorkspaceMember[];
  onRemoveMember: (id: string) => void;
  onUpdateRole: (id: string, role: WorkspaceMember['role']) => void;
  isLoading?: boolean;
  error?: string;
}
