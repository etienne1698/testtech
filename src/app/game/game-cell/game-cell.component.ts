import { Component, EventEmitter, Input, Output, signal } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'game-cell',
  standalone: false,
  templateUrl: './game-cell.component.html',
  styleUrl: './game-cell.component.css',
})
export class GameCellComponent {
  @Input() color: string = '';

  value = new FormControl('');

  @Output() colorChange = new EventEmitter<string>();

  onKeydown(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.enter();
    }
  }

  enter() {
    this.colorChange.emit(this.value.value || '');
    this.value.setValue('');
  }
}
