import { Injectable, SecurityContext } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ToastComponent } from 'src/app/components/toast/toast.component';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  private toastComponent!: ToastComponent;
  private sanitizedMessage!: string | null;
  private sanitizedTitle!: string | null;
  constructor(private sanitizer: DomSanitizer) {}

  createToastComponent(component: ToastComponent) {
    this.toastComponent = component;
  }

  error(message: string, title?: string) {
    this.sanitizedMessage = this.sanitizeMessage(message);
    if (title) this.sanitizedTitle = this.sanitizeMessage(title);
    this.toastComponent.error(this.sanitizedMessage, this.sanitizedTitle);
  }

  success(message: string, title?: string) {
    this.sanitizedMessage = this.sanitizeMessage(message);
    if (title) this.sanitizedTitle = this.sanitizeMessage(title);
    this.toastComponent.success(this.sanitizedMessage, this.sanitizedTitle);
  }

  sanitizeMessage(message: string) {
    return this.sanitizer.sanitize(SecurityContext.HTML, message);
  }
}
