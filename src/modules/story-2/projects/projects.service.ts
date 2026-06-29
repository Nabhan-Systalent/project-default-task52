import { Injectable } from '@nestjs/common';
import { ProjectDto } from '../dtos';

@Injectable()
export class ProjectsService {
  private projects: ProjectDto[] = [{ id: '1', name: 'Main Project' }];

  findAll(): ProjectDto[] {
    return this.projects;
  }

  delete(id: string): void {
    this.projects = this.projects.filter(p => p.id !== id);
  }
}
