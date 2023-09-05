import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private element:ElementRef,private renderer:Renderer2) { }

  @HostBinding('style.backgroundColor') backgroundColor:string='red';
  @HostBinding('style.fontSize') fontSize:string='20px';

  @HostListener('mouseenter') mouseenter(){
    this.backgroundColor='blue';
    this.fontSize='10px';
  } 
  @HostListener('mouseleave') mouseleave(){
    this.backgroundColor='red';
    this.fontSize='20px'
  }

}
