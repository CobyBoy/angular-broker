import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Constants } from 'src/app/shared/constants';
import { AuthService } from '../services/auth.service';
import { ToastService } from '../../services/toast.service';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  loginForm!: FormGroup;
  isEyeIconOpen: boolean = false;
  isEyeIconOpenForConfirmPassword: boolean = false;
  fieldRequiredText = 'This field is required';
  arePasswordsEqual: boolean = false;

  constructor(
    private authService: AuthService,
    private router: Router,
    private toastService: ToastService,
    private globalService: GlobalService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.createForm();
    this.arePasswordsEqual = this.loginForm.controls['password'].value === this.loginForm.controls['confirmPassword'].value
    this.loginForm.valueChanges.subscribe((_d) => {
      this.arePasswordsEqual = _d.password === _d.confirmPassword;
      
    });
    console.log(this.loginForm);
  }

  createForm(): FormGroup {
    return new FormGroup({
      username: new FormControl('coby', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(10),
      ]),
      email: new FormControl('abouta@gmail.com', [
        Validators.email,
        Validators.required,
      ]),
      password: new FormControl('1111', [
        Validators.minLength(4),
        Validators.maxLength(16),
        Validators.required,
      ]),
      confirmPassword: new FormControl('1111', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(16),
      ]),
    });
  }

  getFormControls(control: string) {
    return this.loginForm.controls[control];
  }

  /*   onLoginSubmitForm(_event: SubmitEvent) {
    Object.values(this.loginForm.controls).forEach((control) => {
      control.markAllAsTouched();
    });
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
        console.info(error);
        this.toastService.error(error.message, error.error.title);
      },
    });
  } */

  onSignUp(_event: SubmitEvent) {
    this.globalService.$isLoading.next(true);
    Object.values(this.loginForm.controls).forEach((control) => {
      control.markAllAsTouched();
    });
    console.log(this.loginForm.invalid);
    if (this.loginForm.invalid) return;
    this.authService.signUp(this.loginForm.value).subscribe({
      next: (response) => {
        this.globalService.$isLoading.next(false);
        console.log('resposne', response);
      },
      error: (error) => {
        this.globalService.$isLoading.next(false);
        console.error('error', error);
      },
    });
  }

  viewPassword() {
    this.isEyeIconOpen = !this.isEyeIconOpen;
  }

  viewConfirmPassword() {
    this.isEyeIconOpenForConfirmPassword =
      !this.isEyeIconOpenForConfirmPassword;
  }
}
