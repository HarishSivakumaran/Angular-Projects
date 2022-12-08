import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'custom_directives';
  show: boolean = true;
  num:number = 1;
  constructor() {}

  ngOnInit(): void {
    setInterval(() => {
      this.show = !this.show;
      this.num++;
    }, 2000);
  }
}
