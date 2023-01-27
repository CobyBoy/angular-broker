import { Injectable, SecurityContext, Type } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ToastComponent } from 'src/app/components/toast/toast.component';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  private toast!: ToastComponent;
  private sanitizedMessage!: string | null;
  private sanitizedTitle!: string | null;
  constructor(private sanitizer: DomSanitizer) {}

  createToastComponent(component: ToastComponent) {
    this.toast = component;
  }

  error(message: string, title?: string) {
    this.sanitizedMessage = this.sanitizeMessage(message);
    if(title) this.sanitizedTitle = this.sanitizeMessage(title);
    this.toast.error(this.sanitizedMessage, this.sanitizedTitle);
  }

  sanitizeMessage(message: string) {
    return this.sanitizer.sanitize(SecurityContext.HTML, message);
  }
}
