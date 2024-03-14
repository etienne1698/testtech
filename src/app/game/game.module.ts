import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameNewComponent } from './game-new/game-new.component';
import { GameCellComponent } from './game-cell/game-cell.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [GameNewComponent, GameCellComponent],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule
  ],
  exports: [GameNewComponent, GameCellComponent]
})
export class GameModule { }
