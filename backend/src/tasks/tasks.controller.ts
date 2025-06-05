import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './task.entity';

@Controller('api/tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  findAll(): Task[] {
    return this.tasksService.findAll();
  }

  @Post()
  create(@Body('title') title: string): Task {
    return this.tasksService.create(title);
  }

 @Put(':id')
toggleCompletion(@Param('id') id: number): Task | { message: string } {
  const task = this.tasksService.toggleCompletion(id);
  if (!task) {
    return { message: 'Task not found' };
  }
  return task;
}
  @Delete(':id')
  delete(@Param('id') id: number): void {
    this.tasksService.delete(id);
  }
}