import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  emailFieldHasRequiredErrors: boolean = false;
  passwordFieldHasRequiredErrors: boolean = false;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.loginForm = this.createForm();
    this.loginForm.valueChanges.subscribe((_d) => {});
  }

  createForm(): FormGroup {
    return new FormGroup({
      email: new FormControl('aboutacoby@gmail.com', [
        Validators.email,
        Validators.required,
      ]),
      password: new FormControl('1234', [
        Validators.minLength(4),
        Validators.required,
      ]),
    });
  }

  getFormControls(control: string) {
    return this.loginForm.controls[control];
  }

  onLoginSubmitForm(_event: SubmitEvent) {
    Object.values(this.loginForm.controls).forEach((control) => {
      control.markAllAsTouched();
    })

    if (this.loginForm.invalid) return;
    this.authService.login(this.loginForm.value)
      .subscribe({
        next: (value) => { if (!value) return; this.router.navigate(['/terminal'])},
        error: (error) => { console.warn('error en logueo', error) }
      });
  }
}
