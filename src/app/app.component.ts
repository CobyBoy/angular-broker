import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { AuthService } from './auth/services/auth.service';
import { ToastService } from './services/toast.service';
import { ToastComponent } from './components/toast/toast.component';
import { GlobalService } from './services/global.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  @ViewChild(ToastComponent) toastComponent!: ToastComponent;
  publicGlobalService: GlobalService;

  constructor(
    private authService: AuthService,
    private toastService: ToastService,
    private globalService: GlobalService
  ) {
    this.publicGlobalService = this.globalService;
  }

  ngAfterViewInit(): void {
    this.toastService.createToastComponent(this.toastComponent);
  }

  isLoggedIn(): boolean {
    return !this.authService.isAuthenticated();
  }
}
