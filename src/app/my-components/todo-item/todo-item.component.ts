import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../../Todo';
import { LucideAngularModule } from 'lucide-angular';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'todo-item',
  standalone: true,
  imports: [CommonModule, LucideAngularModule, MatIconModule],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css',
})
export class TodoItemComponent {
  @Input() todo: Todo;
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
  constructor() {}

  onClick(todo: Todo) {
    console.log(`Todo ${todo.id} clicked`);
    this.todoDelete.emit(todo);
  }
}
