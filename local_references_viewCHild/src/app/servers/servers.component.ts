import { EventEmitter } from "@angular/core";
import { Output } from "@angular/core";
import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent{
   @ViewChild('serverInputHTMLElement', { static: true }) oInputElementRef: ElementRef | undefined;
   @Output() addServerName: EventEmitter<string> = new EventEmitter<string>();

  constructor(){
  }

  addServer(oInputElement : HTMLInputElement){
    console.log(oInputElement.value);
    this.addServerName.emit(oInputElement.value);
    this.oInputElementRef.nativeElement.value = "Some Placeholder";
  }

  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

  }

}
