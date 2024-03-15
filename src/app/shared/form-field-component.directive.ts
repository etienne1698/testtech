import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appFormFieldComponent]',
  standalone: false
})
export class FormFieldComponentDirective {
  constructor(private el: ElementRef) {
    el.nativeElement.classList.add('form-control');
    el.nativeElement.classList.add('rounded-right');
  }
}
