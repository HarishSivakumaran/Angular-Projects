import { ElementRef } from '@angular/core';
import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})
export class DropDownDirective {
  @HostBinding('class.open') isOpen: boolean = false;

  @HostListener('document:click', ['$event']) toggleOpen(oEvent: Event) {
    this.isOpen = this.elementRef.nativeElement.contains(oEvent.target) ? !this.isOpen : false;
  }

  constructor(private elementRef: ElementRef){}
}

