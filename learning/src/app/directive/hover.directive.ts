import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective{

  constructor(private element:ElementRef,private renderer:Renderer2) { 

  }
  @HostListener('mouseenter') onmouseover(){
  this.renderer.setStyle(this.element.nativeElement,'fontSize','50px');
  }
  @HostListener('mouseleave') onmouseleave(){
    this.renderer.setStyle(this.element.nativeElement,'fontSize','15px');
  }
}
