import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[error-msg]'
})
export class ErrorMsgDirective implements OnInit, OnChanges {

  private _color: string = 'red';
  private _mensaje: string = 'Este campo es requerido';

  htmlElement: ElementRef<HTMLElement>;

  @Input() set color(valor: string) {
    this._color = valor;
    this.setColor();
  }

  @Input() set mensaje(valor: string) {
    this._mensaje = valor;
    this.setMensaje();
  }

  constructor( private el: ElementRef<HTMLElement> ) {
    this.htmlElement = el;
   }

  ngOnChanges(changes: SimpleChanges): void {

    // if ( changes['mensaje'] ) {
    //   const mensaje = changes['mensaje'].currentValue;
    //   this.htmlElement.nativeElement.innerText= mensaje;
    // }

    // if ( changes['color'] ) {
    //   const color = changes['color'].currentValue;
    //   this.htmlElement.nativeElement.style.color = color;
    // }

    // console.log( changes );
  }

  ngOnInit(): void {
    this.setEstilo();
    this.setColor();
    this.setMensaje();
  }

  setEstilo(): void {
    this.htmlElement.nativeElement.classList.add('form-text');
  }

  setColor(): void {
    this.htmlElement.nativeElement.style.color = this._color;
  }

  setMensaje(): void {
    this.htmlElement.nativeElement.innerText= this._mensaje;
  }

}
