import {
  Directive,
  Renderer2,
  ElementRef,
  OnInit,
  Input,
  HostListener,
} from '@angular/core';

@Directive({
  selector: '[betterHighlight]',
})
export class BetterHighLightDirective implements OnInit {
  @Input('betterHighlight') defaultColor: string = 'yellow';
  @Input('highLightColor') highLightColor: string = '';

  @HostListener('mouseenter') mouseover(eventData: Event) {
    this.rederer.setStyle(
      this.elementRef.nativeElement,
      'background-color',
      this.highLightColor
    );
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.rederer.setStyle(
      this.elementRef.nativeElement,
      'background-color',
      this.defaultColor
    );
  }

  constructor(private elementRef: ElementRef, private rederer: Renderer2) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.rederer.setStyle(
      this.elementRef.nativeElement,
      'background-color',
      this.defaultColor
    );
  }
}
