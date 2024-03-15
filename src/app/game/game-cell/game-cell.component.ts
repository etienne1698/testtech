import { Component, EventEmitter, Input, Output, signal } from '@angular/core';

@Component({
  selector: 'game-cell',
  standalone: false,
  templateUrl: './game-cell.component.html',
  styleUrl: './game-cell.component.css',
})
export class GameCellComponent {
  @Input() color: string = '';

  value = signal('');

  @Output() colorChange = new EventEmitter<string>();

  enter() {
    this.colorChange.emit(this.value());
  }
}
