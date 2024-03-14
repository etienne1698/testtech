import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormFieldComponent } from './form-field/form-field.component';
import { LoadingComponent } from './loading/loading.component';
import { UserConnectedDirective } from './user-connected.directive';

@NgModule({
  declarations: [FormFieldComponent, LoadingComponent, UserConnectedDirective],
  imports: [CommonModule],
  exports: [FormFieldComponent, LoadingComponent, UserConnectedDirective],
})
export class SharedModule {}
