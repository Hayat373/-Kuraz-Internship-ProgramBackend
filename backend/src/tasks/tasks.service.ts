import { Injectable } from '@nestjs/common';
import { Task } from './task.entity';

@Injectable()
export class TasksService {
  private tasks: Task[] = [
    { id: 1, title: 'Buy groceries', completed: false },
    { id: 2, title: 'Read a book', completed: true },
  ];

  findAll(): Task[] {
    return this.tasks;
  }

  create(title: string): Task {
    const newTask = {
      id: this.tasks.length + 1,
      title,
      completed: false,
    };
    this.tasks.push(newTask);
    return newTask;
  }

  toggleCompletion(id: number): Task | null {
    const task = this.tasks.find(task => task.id === id);
    if (task) {
      task.completed = !task.completed;
      return task;
    }
    return null; // Return null if the task is not found
  }

  delete(id: number): void {
    this.tasks = this.tasks.filter(task => task.id !== id);
  }
}