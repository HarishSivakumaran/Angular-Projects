import { ElementRef } from '@angular/core';
import { Directive, OnInit } from '@angular/core';

@Directive({
  selector: '[basicHighlight]'
})
export class BasicHighlightDirective implements OnInit{

  constructor(private elementRef: ElementRef){
    this.elementRef.nativeElement.style.backgroundColor = 'green';
    this.elementRef.nativeElement.style.color = 'white';
  }

  ngOnInit(): void {

  }
}
