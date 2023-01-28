import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
})
export class ToastComponent implements OnInit {
  message: string | null = '';
  title: string | null | undefined = '';
  isToastVisible: boolean = false;
  private TIMEOUT: number = 3000;
  toastType!: string;

  constructor() {}

  ngOnInit(): void {}

  success(message: string | null, title?: string | null) {
    const type = 'success';
    this.message = message;
    this.title = title;
    this.isToastVisible = !this.isToastVisible;
    this.buildToast(type);
    this.hideToast();
  }

  error(message: string | null, title?: string | null) {
    const type = 'error';
    this.message = message;
    this.title = title;
    this.isToastVisible = !this.isToastVisible;
    this.buildToast(type);
    this.hideToast();
  }

  buildToast(type: string) {
    this.toastType = type;
  }

  hideToast() {
    setTimeout(() => {
      this.isToastVisible = false;
    }, this.TIMEOUT);
  }
}
