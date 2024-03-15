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

    // Les suppression de lignes / colonnes seront moins lourde ainsi 
    if (this.grid().length > rows) {
      this.grid.update((grid) => {
        grid.length = rows;
        return grid;
      });
      return;
    }

    if (this.grid()?.[0]?.length > cols) {
      this.grid.update((grid) => {
        for (const rowIndex in grid) {
          grid[rowIndex].length = cols;
        }
        return grid;
      });
      return;
    }

    let res: Array<Array<string>> = [];
    for (let r = 0; r < rows; r++) {
      const rowArray: Array<string> = [];
      for (let c = 0; c < cols; c++) {
        rowArray.push(this.grid()?.[r]?.[c] || 'transparent');
      }
      res.push(rowArray);
    }
    this.grid.set(res);
  }

  ngOnInit(): void {
    this.buildGrid(this.form.value as { cols: number; rows: number });
    this.form.valueChanges.subscribe((val) => {
      if (!val.rows || !val.cols) return;
      this.buildGrid(val as { cols: number; rows: number });
    });
  }

  updateCellColor(i: number, y: number, color: string) {
    this.grid.update((grid) => {
      grid[i][y] = color;
      return grid;
    });
  }
}
