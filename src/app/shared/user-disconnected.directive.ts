import { Directive, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { UserService } from '../user/user.service';
import { User } from '../user/models/user';
import { Subscription } from 'rxjs';
import { UserConnectedDirective } from './user-connected.directive';

@Directive({
  selector: '[appUserDisconnected]',
  standalone: false,
})
export class UserDisconnectedDirective extends UserConnectedDirective {

  protected override checkUser(user: User | null, el: Element): void {
    if (user != null) {
      el.classList.add('d-none');
    } else {
      el.classList.remove('d-none');
    }
  }


}
