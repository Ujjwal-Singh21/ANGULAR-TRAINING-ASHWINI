import { Directive, ElementRef, HostListener, Input } from '@angular/core'

@Directive({
  selector: '[appOutofstock]'
})
export class OutofstockDirective {

  @Input() qty: number

  constructor (private elementRef: ElementRef) {}

  @HostListener('click')
  clickhandler () {
    if (this.qty < 1) {
      this.elementRef.nativeElement.style.backgroundColor = 'gray'
    }
  }

  ngOnInit () {
    // if (this.qty < 1) {
    //   this.elementRef.nativeElement.style.backgroundColor = 'gray';
    // }
  }
}
