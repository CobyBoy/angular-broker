import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { ToastService } from '../../services/toast.service';
import { GlobalService } from 'src/app/services/global.service';
import { UserDto } from 'src/app/models/user';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  @ViewChild('phoneNumber') phoneNumber!: ElementRef;
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
    this.arePasswordsEqual =
      this.loginForm.controls['password'].value ===
      this.loginForm.controls['confirmPassword'].value;
    this.loginForm.valueChanges.subscribe((control) => {
      this.arePasswordsEqual = control.password === control.confirmPassword;
      if (control.areaCode.length == 4) {
        this.phoneNumber.nativeElement.focus();
      }
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
      areaCode: new FormControl('011', [
        Validators.required,
        Validators.maxLength(4),
      ]),
      phoneNumber: new FormControl('64479914', [
        Validators.required,
        Validators.maxLength(8),
      ]),
    });
  }

  getFormControls(control: string) {
    return this.loginForm.controls[control];
  }

  onSignUp(_event: SubmitEvent) {
    this.globalService.$isLoading.next(true);
    Object.values(this.loginForm.controls).forEach((control) => {
      control.markAllAsTouched();
    });
    console.log(this.loginForm.invalid);
    if (this.loginForm.invalid) return;
    // put together areacode + phoneNumber
    Object.assign(this.loginForm.value, { ...this.loginForm.value, phoneNumber: this.loginForm.value.areaCode + this.loginForm.value.phoneNumber });
    // get rid of areaCode
    const { areaCode, ...values } = this.loginForm.value
    this.authService.signUp(values as UserDto).subscribe({
      next: (response) => {
        this.globalService.$isLoading.next(false);
        this.toastService.success(response.message);
      },
      error: (error) => {
        this.globalService.$isLoading.next(false);
        console.warn('error', error);
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
