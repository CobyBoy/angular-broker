import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { ToastService } from '../services/toast.service';

@Injectable()
export class ErrorHandlerInterceptor implements HttpInterceptor {
  constructor(private toastService: ToastService) {}

  intercept(request: HttpRequest<unknown>,next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        console.warn(error);
        if (error.error.title) this.toastService.error(error.error.title);
        else this.toastService.error(error.error.message);
        return throwError(() => error);
      })
    );
  }
}
