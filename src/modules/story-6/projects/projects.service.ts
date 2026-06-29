import { Injectable, NotFoundException } from '@nestjs/common';
import { Project } from './dto/project.dto';

@Injectable()
export class ProjectsService {
  private projects: Project[] = [
    { id: '1', name: 'Alpha Project', createdAt: new Date() },
    { id: '2', name: 'Beta Project', createdAt: new Date() },
  ];

  async findAll(): Promise<Project[]> {
    return this.projects;
  }

  async delete(id: string): Promise<void> {
    const index = this.projects.findIndex((p) => p.id === id);
    if (index === -1) {
      throw new NotFoundException(`Project with ID ${id} not found`);
    }
    this.projects.splice(index, 1);
  }
}
