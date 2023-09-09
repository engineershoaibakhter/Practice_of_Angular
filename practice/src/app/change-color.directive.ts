import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appChangeColor]'
})
export class ChangeColorDirective {

  constructor(private element:ElementRef,private renderer:Renderer2){}

  @HostListener('mouseenter') onClick(){
this.renderer.setStyle(this.element.nativeElement,'backgroundColor','red');
  }

}
