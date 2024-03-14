import { Component, signal } from '@angular/core';
import { UserService } from '../user.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  constructor(private userService: UserService) {}

  error = signal<string | undefined>(undefined);

  form = new FormGroup({
    email: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(6), Validators.email],
    }),
    password: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(5)],
    }),
  });

  login() {
    if (!this.form.valid) return;
    // @ts-ignore
    this.userService.login({ ...this.form.value }).subscribe({
      error: (err) => {
        console.error(err);
        this.error.set(err);
      },
      next(value) {},
    });
  }
}
