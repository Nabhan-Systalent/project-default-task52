import { Injectable } from '@nestjs/common';
import { TaskDto, CreateTaskDto } from '../dto';

@Injectable()
export class TasksService {
  private tasks: TaskDto[] = [{ id: '1', title: 'Setup S3' }];

  findAll(): TaskDto[] {
    return this.tasks;
  }

  create(data: CreateTaskDto): TaskDto {
    const newTask = { id: Math.random().toString(), ...data };
    this.tasks.push(newTask);
    return newTask;
  }
}
