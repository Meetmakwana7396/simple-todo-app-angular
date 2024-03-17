export class Todo {
  id: number;
  title: string;
  description: string;
  active: boolean;

  constructor() {
    this.id = 0;
    this.title = '';
    this.description = '';
    this.active = true;
  }
}
