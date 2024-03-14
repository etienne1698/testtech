import { Component, signal } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { UserModule } from './user/user.module';
import { GameModule } from './game/game.module';
import { UserService } from './user/user.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SharedModule, UserModule, GameModule, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  constructor(private userService: UserService, private router: Router) {}
  title = 'color-app';

  logoutLoading = signal(false);

  logout() {
    this.logoutLoading.set(true);
    const sub = this.userService.logout().subscribe(() => {
      this.router.navigateByUrl('/user/login');
      this.logoutLoading.set(false);
      sub.unsubscribe();
    });
  }
}
