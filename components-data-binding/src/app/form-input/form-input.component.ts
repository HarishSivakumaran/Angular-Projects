import { Component } from '@angular/core';

@Component({
    selector: 'form-input',
    templateUrl: './form-input.component.html',
    styleUrls: ['./form-input.component.css']
})

export class FormInputComponent{
   userName: string = "";

   onAddUserName(oEvent:any){
       console.log(oEvent);
       this.userName = oEvent.target.value;
   }
}