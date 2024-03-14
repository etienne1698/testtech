import { Component, signal } from '@angular/core';
import { UserService } from '../user.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  constructor(private userService: UserService) {}

  error = signal<string | undefined>(undefined);

  email = new FormControl('');
  password = new FormControl('');

  login() {
    const email = this.email.value;
    const password = this.password.value;
    if (!email || !password) return;
    this.userService.login({ email, password }).subscribe({
      error: (err) => {
        console.error(err)
        this.error.set(err)
      },
      next(value) {
          
      },
    });
  }
}
