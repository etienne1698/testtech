import { Component, OnInit, signal } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'game-new',
  standalone: false,
  templateUrl: './game-new.component.html',
  styleUrl: './game-new.component.css',
})
export class GameNewComponent /* implements OnInit */ {
  grid = signal<Array<Array<string>>>([]);

  form = new FormGroup({
    rows: new FormControl(3),
    cols: new FormControl(6),
  });

  buildGrid({ cols, rows }: { cols: number; rows: number }) {
    let res: Array<Array<string>> = [];
    for (let r = 0; r < rows; r++) {
      const rowArray: Array<string> = [];
      for (let c = 0; c < cols; c++) {
        rowArray.push('');
      }
      res.push(rowArray);
    }
    this.grid.set(res);
  }

  ngOnInit(): void {
    this.form.valueChanges.subscribe((val) => {
      if (!val.rows || !val.cols) return;
      // @ts-ignore
      this.buildGrid(val);
    });
  }

  updateCell() {}
}
