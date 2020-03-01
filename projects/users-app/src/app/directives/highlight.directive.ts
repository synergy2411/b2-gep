import { Directive, ElementRef, Renderer2, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector : "[appHighlight]"
})
export class HightlightDirective{

  @HostBinding("style.background-color") bgColor : any;

  @HostListener("mouseenter")
  onouseenter(){
    this.bgColor = "lightgrey";
  }

  @HostListener("mouseleave")
  onmouseleave(){
    this.bgColor = "transparent";
  }

  constructor(private elementRef : ElementRef, private r2 : Renderer2){
    // this.elementRef.nativeElement.style.backgroundColor = "aqua";
    // this.r2.setStyle(this.elementRef.nativeElement, 'background-color', 'yellow');

  }

}
