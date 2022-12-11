import { EventEmitter, Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class UserLoggingService {
  logAction = new EventEmitter<string>();

  constructor() {
    this.logAction.subscribe((sStatus: string) => {
      console.log(sStatus);
    });
  }
}
