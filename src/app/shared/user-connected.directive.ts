import { Directive, ElementRef } from '@angular/core';
import { UserService } from '../user/user.service';

@Directive({
  selector: '[appUserConnected]',
  standalone: false,
})
export class UserConnectedDirective {
  constructor(private el: ElementRef, private userService: UserService) {
    if (this.userService.user === null) {
      this.el.nativeElement.classList.add('d-none');
    }
  }
}
