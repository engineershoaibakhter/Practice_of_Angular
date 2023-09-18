import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBackground]'
})
export class BackgroundDirective {

  constructor(private element:ElementRef,private renderer:Renderer2){}
  ngOnInit(){
   this.renderer.setStyle(this.element.nativeElement,'backgroundColor','red')
  }

}
