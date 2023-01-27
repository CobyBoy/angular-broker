import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Constants } from '../../shared/constants';
declare var google: any;

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit, AfterViewInit {
  loginForm!: FormGroup;
  isEyeIconOpen: boolean = false;
  fieldRequiredText = 'This field is required';

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.loginForm = this.createForm();
    this.loginForm.valueChanges.subscribe((_d) => {});
  }

  ngAfterViewInit(): void {
    google.accounts.id.initialize({
      client_id:
        '457042345567-5att5eq483pp1tsllp2r5foenjgm6n5s.apps.googleusercontent.com',
      callback: this.handleCredentialResponse,
    });
    google.accounts.id.renderButton(
      document.getElementById('buttonDiv'),
      { theme: 'outline', size: 'large' } // customization attributes
    );
    google.accounts.id.prompt(); // also display the One Tap dialog
  }

  handleCredentialResponse(response: any) {
    console.log(response);
    if (response.credential) {
      sessionStorage.setItem('googleToken', response.credential);
      document.getElementById('loginButton')?.click();
    }
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
    });

    if (this.loginForm.invalid) return;
    this.authService.logIn(this.loginForm.value).subscribe({
      next: (response) => {
        const jwtToken = response.token;
        console.log(response);
        this.router.navigate(['/account']);
        if (!jwtToken) return;
        localStorage.setItem(Constants.JWT_TOKEN, jwtToken);
        this.router.navigate(['/account']);
      },
      error: (error) => {
        console.warn('error en logueo', error);
      },
    });
  }

  viewPassword() {
    this.isEyeIconOpen = !this.isEyeIconOpen;
  }
  navigate() {
    console.log('navigate');
  }
}
