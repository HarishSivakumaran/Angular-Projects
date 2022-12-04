import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css'],
})
export class GameControlComponent {
  count: number = 0;
  intervalCallBack: NodeJS.Timer | undefined;
  @Output('addNewNumber') addNumber: EventEmitter<number> =
    new EventEmitter<number>();

  startGame() {
    this.intervalCallBack = setInterval(() => {
      this.count++;
      this.addNumber.emit(this.count);
    }, 1000);
  }

  stopGame() {
    clearInterval(this.intervalCallBack);
  }
}
