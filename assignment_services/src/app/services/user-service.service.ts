import { UserLoggingService } from './user-logging.service';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class UserService {
  aActiveUsers: string[] = ['max', 'joe'];
  aInactiveUsers: string[] = ['Rob', 'Doe'];

  constructor(private userLoggingService: UserLoggingService){}

  moveToInactive(index: number) {
    this.aInactiveUsers.push(this.aActiveUsers.splice(index, 1)[0]);
    this.userLoggingService.logAction.emit(this.aInactiveUsers[this.aInactiveUsers.length-1] + " changed to Inactive");
  }
  moveToActive(index: number) {
    this.aActiveUsers.push(this.aInactiveUsers.splice(index, 1)[0]);
    this.userLoggingService.logAction.emit(this.aActiveUsers[this.aActiveUsers.length-1] + " changed to active");

  }
}
