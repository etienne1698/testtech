import { Component, signal } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'game-new',
  standalone:  false,
  templateUrl: './game-new.component.html',
  styleUrl: './game-new.component.css'
})
export class GameNewComponent {
  grid = signal<Array<Array<[string]>>>([])

  form = new FormGroup({
    rows: new FormControl(3),
    cols: new FormControl(6),
  })
}
