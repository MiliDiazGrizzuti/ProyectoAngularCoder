import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  constructor(private elementRef: ElementRef) {
    this.elementRef.nativeElement.style.backgroundColor = 'yellow';
    this.elementRef.nativeElement.style.color = 'red';
    this.elementRef.nativeElement.style.fontWeight = 'bold';
    this.elementRef.nativeElement.style.fontSize = '20px';
  }

}
