import { Directive, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { UserService } from '../user/user.service';
import { Subscription } from 'rxjs';
import { User } from '../user/models/user';

@Directive({
  selector: '[appUserConnected]',
  standalone: false,
})
export class UserConnectedDirective implements OnInit, OnDestroy {
  sub?: Subscription;

  protected checkUser(user: User | null, el: Element): void {
    if (user == null) {
      el.classList.add('d-none');
    } else {
      el.classList.remove('d-none');
    }
  }

  constructor(private el: ElementRef, private userService: UserService) {
    this.checkUser(this.userService.user, this.el.nativeElement)
  }

  ngOnInit(): void {
    this.sub = this.userService.user$.subscribe((user) =>
      this.checkUser(user, this.el.nativeElement)
    );
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe?.();
  }
}
