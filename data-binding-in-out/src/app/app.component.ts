import { Todo } from './shared/todo.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'data-binding-in-out';
  aTodoList : Todo[] = [];

  addList(oTodo : Todo){
    this.aTodoList.push(oTodo);
  }
}
