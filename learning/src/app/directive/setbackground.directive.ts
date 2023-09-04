import { Directive, ElementRef,OnInit,Renderer2 } from "@angular/core";

@Directive({
    selector:'[setBackground]'
})
export class SetBackgroundDirective implements OnInit{

    constructor(private element:ElementRef,private renderer:Renderer2){

    }
    ngOnInit(){
      this.renderer.setStyle(this.element.nativeElement,'backgroundColor','blue');
      this.renderer.addClass(this.element.nativeElement,'container');
      this.renderer.setAttribute(this.element.nativeElement,'title','Hello')
    }

}

