import { Component, Input } from '@angular/core';

@Component({
  selector: 'loading',
  standalone: false,
  templateUrl: './loading.component.html',
  styleUrl: './loading.component.css'
})
export class LoadingComponent {
  @Input() loading?: boolean;
}
