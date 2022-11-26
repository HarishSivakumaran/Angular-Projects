import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-directives';
  bShowDetails : boolean = false;
  aClick: string[] = [];

  toggleDetail(){
    this.bShowDetails = !this.bShowDetails;
    this.aClick.push(this.bShowDetails ? 'Show Detail Pressed' : 'Hide Detail Pressed');
  }
}
