import { UserService } from './services/user-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'assignment_services';
  aActiveUsers: string[] = [];
  aInActiveUsers: string[] = [];
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.aActiveUsers = this.userService.aActiveUsers;
    this.aInActiveUsers = this.userService.aInactiveUsers;
  }

  moveToActive(i: number) {
    this.userService.moveToActive(i);
  }

  moveToInactive(i: number) {
    this.userService.moveToInactive(i);
  }
}
