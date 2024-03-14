import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormFieldComponent } from './form-field/form-field.component';
import { LoadingComponent } from './loading/loading.component';
import { UserConnectedDirective } from './user-connected.directive';
import { UserDisconnectedDirective } from './user-disconnected.directive';

@NgModule({
  declarations: [FormFieldComponent, LoadingComponent, UserConnectedDirective, UserDisconnectedDirective],
  imports: [CommonModule],
  exports: [FormFieldComponent, LoadingComponent, UserConnectedDirective, UserDisconnectedDirective],
})
export class SharedModule {}
