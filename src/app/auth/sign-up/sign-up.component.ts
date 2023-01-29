import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { ToastService } from '../../services/toast.service';
import { GlobalService } from 'src/app/services/global.service';
import { UserDto } from 'src/app/models/user';
import { debounceTime, distinctUntilChanged, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit, OnDestroy {
  @ViewChild('phoneNumber') phoneNumber!: ElementRef;
  loginForm!: FormGroup;
  isEyeIconOpen: boolean = false;
  isEyeIconOpenForConfirmPassword: boolean = false;
  fieldRequiredText = 'This field is required';
  arePasswordsEqual: boolean = false;
  private destroy$ = new Subject();

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
    this.loginForm.valueChanges
      .pipe(
        debounceTime(1000),
        distinctUntilChanged(),
        takeUntil(this.destroy$))
      .subscribe((control) => {
        this.arePasswordsEqual = control.password === control.confirmPassword;
        if (control.areaCode.length == 4) {
          this.phoneNumber.nativeElement.focus();
        }
      });
    console.log(this.loginForm);
  }

  createForm(): FormGroup {
    return new FormGroup({
      username: new FormControl('coby5', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(64),
      ]),
      email: new FormControl('abouta@gmail.com', [
        Validators.required,
        Validators.email,
        Validators.minLength(3),
        Validators.maxLength(254),
      ]),
      password: new FormControl('@Cc1234', [
        Validators.minLength(4),
        Validators.required,
      ]),
      confirmPassword: new FormControl('@Cc1234', [
        Validators.required,
        Validators.minLength(4),
      ]),
      areaCode: new FormControl('011', [
        Validators.required,
        Validators.maxLength(4),
      ]),
      phoneNumber: new FormControl('124569', [
        Validators.required,
        Validators.maxLength(8),
      ]),
    });
  }

  getFormControls(control: string) {
    return this.loginForm.controls[control];
  }

  onSignUp(_event: SubmitEvent) {
    Object.values(this.loginForm.controls).forEach((control) => {
      control.markAllAsTouched();
    });
    console.log(this.loginForm.invalid);
    if (this.loginForm.invalid) return;
    this.authService.signUp(this.loginForm.value as UserDto) .subscribe({
      next: (response) => {
        this.toastService.success(response.message);
      },
      error: (error) => {
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

  ngOnDestroy(): void {
    this.destroy$.next(undefined);
    this.destroy$.complete();
  }
}
