import { OnInit } from '@angular/core';
import { Item } from './model/item.model';
import { DataService } from './services/data.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'services_dependency_injection';
  aData: Item[] = [];

  constructor(private dataService: DataService){}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.aData = this.dataService.aData;
  }
}
