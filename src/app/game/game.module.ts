import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameNewComponent } from './game-new/game-new.component';
import { GameCellComponent } from './game-cell/game-cell.component';



@NgModule({
  declarations: [GameNewComponent, GameCellComponent],
  imports: [
    CommonModule
  ],
  exports: [GameNewComponent, GameCellComponent]
})
export class GameModule { }
