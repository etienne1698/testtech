import { Component, signal } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { UserModule } from './user/user.module';
import { GameModule } from './game/game.module';
import { UserService } from './user/user.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SharedModule, UserModule, GameModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  constructor(private userService: UserService, private router: Router) {}
  title = 'color-app';

  logout() {
    const sub = this.userService.logout().subscribe(() => {
      this.router.navigateByUrl('/user/login');
      sub.unsubscribe();
    });
  }
}
