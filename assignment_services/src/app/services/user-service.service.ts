import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class UserService {
  aActiveUsers: string[] = ['max', 'joe'];
  aInactiveUsers: string[] = ['Rob', 'Doe'];

  moveToInactive(index: number) {
    this.aInactiveUsers.push(this.aActiveUsers.splice(index, 1)[0]);
  }
  moveToActive(index: number) {
    this.aActiveUsers.push(this.aInactiveUsers.splice(index, 1)[0]);
  }
}
