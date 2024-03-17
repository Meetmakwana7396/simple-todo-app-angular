import { Component } from '@angular/core';
import { TodosComponent } from './my-components/todos/todos.component';
import { CommonModule } from '@angular/common';
import { TodoItemComponent } from './my-components/todo-item/todo-item.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, TodosComponent, TodoItemComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Welcome to my first angular app!';
  constructor() {
    setTimeout(() => {
      this.title = "Welcome to meet's first angular app!";
    }, 2000);
  }
}
