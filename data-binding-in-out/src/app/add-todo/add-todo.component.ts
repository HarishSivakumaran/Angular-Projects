import { Todo } from './../shared/todo.component';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css'],
})
export class AddTodoComponent {
  todoText: string = '';
  prio: string = '';
  @Output()
  addTodoToList: EventEmitter<Todo> = new EventEmitter<Todo>();

  onAddTodo() {
    this.addTodoToList.emit(new Todo(this.todoText, this.prio));
  }

  addText(oEvent : Event){
    this.todoText = (oEvent.target as HTMLInputElement).value;
  }

  onChangePrio(oEvent: Event){
    this.prio = (oEvent.target as HTMLSelectElement).value;
  }

  // addPrio(oEvent : Event){
  //   this.todoText = (oEvent.target as HTMLInputElement).value;
  // }
}
