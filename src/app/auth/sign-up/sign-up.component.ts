import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Constants } from 'src/app/shared/constants';
import { AuthService } from '../services/auth.service';
import { ToastService } from '../services/toast.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  loginForm!: FormGroup;
  isEyeIconOpen: boolean = false;
  fieldRequiredText = 'This field is required';

  constructor(private authService: AuthService, private router: Router, private toastService: ToastService) {}

  ngOnInit(): void {
    this.loginForm = this.createForm();
    this.loginForm.valueChanges.subscribe((_d) => {});
  }


  createForm(): FormGroup {
    return new FormGroup({
      email: new FormControl('abouta@gmail.com', [
        Validators.email,
        Validators.required,
      ]),
      password: new FormControl('1111', [
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
    });
    console.log(this.loginForm.invalid)
    if (this.loginForm.invalid) return;
    this.authService.logIn(this.loginForm.value).subscribe({
      next: (response) => {
        const jwtToken = response.token;
        console.log(response);
        this.router.navigate(['/terminal']);
        if (!jwtToken) return;
        localStorage.setItem(Constants.JWT_TOKEN, jwtToken);
        this.router.navigate(['/terminal']);
      },
      error: (error) => {
        console.warn('error en logueo', error);
        console.warn('error en logueo', error.error);
        console.warn('error en logueo', error.status);
        console.warn('error en logueo', error.message);
        this.toastService.error(error.message, error.statusText);
      },
    });
  }

  viewPassword() {
    this.isEyeIconOpen = !this.isEyeIconOpen;
  }
}
