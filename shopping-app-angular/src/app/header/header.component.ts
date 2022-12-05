import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent{
  @Output('sectionSelectionChange')
   pageChange: EventEmitter<string> = new EventEmitter<string>();

   changeSection(sString: string){
      this.pageChange.emit(sString);
   }
}
