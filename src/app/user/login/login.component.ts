import { Component, signal } from '@angular/core';
import { UserService } from '../user.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  constructor(private userService: UserService, private router: Router) {}

  error = signal<string | undefined>(undefined);
  loading = signal(false);

  form = new FormGroup({
    email: new FormControl('', {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.minLength(6),
        Validators.email,
      ],
    }),
    password: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(5)],
    }),
  });

  login() {
    if (!this.form.valid) return;
    this.loading.set(true);
    // @ts-ignore
    const sub = this.userService.login({ ...this.form.value }).subscribe({
      error: (err) => {
        console.error(err);
        this.error.set(err);
        this.loading.set(false);
        sub.unsubscribe();
      },
      next: (value) => {
        sub.unsubscribe();
        this.router.navigateByUrl('/');
        this.loading.set(false);
      },
    });
  }
}
