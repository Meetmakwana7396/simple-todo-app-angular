import { Component } from '@angular/core';
import { Todo } from '../../Todo';
import { CommonModule } from '@angular/common';
import { TodoItemComponent } from '../todo-item/todo-item.component';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [CommonModule, TodoItemComponent],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css',
})
export class TodosComponent {
  todos: Todo[];

  constructor() {
    this.todos = [
      {
        id: 1,
        title: 'Task A',
        description: 'lorem ipsum dolor sit amet, consectetur adip',
        active: true,
      },
      {
        id: 2,
        title: 'Task B',
        description: 'lorem ipsum dolor sit amet, consectetur adip',
        active: true,
      },
      {
        id: 3,
        title: 'Task C',
        description: 'lorem ipsum dolor sit amet, consectetur adip',
        active: true,
      },
    ];
  }
  deleteTodo(TODO: Todo) {
    this.todos = this.todos.filter((todo) => TODO.id !== todo.id);
  }
}
