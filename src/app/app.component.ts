import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { AuthService } from './auth/services/auth.service';
import { ToastService } from './auth/services/toast.service';
import { ToastComponent } from './components/toast/toast.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  @ViewChild(ToastComponent) toastComponent!: ToastComponent;

  constructor(
    private authService: AuthService,
    private toastService: ToastService
  ) {}

  ngAfterViewInit(): void {
    this.toastService.createToastComponent(this.toastComponent);
  }

  isLoggedIn(): boolean {
    return !this.authService.isAuthenticated();
  }
}
