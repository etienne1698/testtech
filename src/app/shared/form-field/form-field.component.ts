import { Component, Input } from '@angular/core';

@Component({
  selector: 'form-field',
  standalone: false,
  templateUrl: './form-field.component.html',
  styleUrl: './form-field.component.css'
})
export class FormFieldComponent {
  @Input() label?: string;
  @Input() id?: string;
}
