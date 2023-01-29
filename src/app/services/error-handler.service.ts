import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastService } from './toast.service';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {

  constructor(private toastService: ToastService, private router: Router) { }

  handleStatusError(error: HttpErrorResponse) {
    switch (error.status) {
      case 400:
        this.toastService.error(error.error.message);
        break;
      case 401: //Unauth
        break;
      case 403: //Forbidden
        break;
      case 404: //Not found
        this.router.navigate(['notfound']);
        break;
      case 0:
      case 503: //Server error
        this.toastService.error('Internal Server Error ' + error.statusText);
        break;
    }
  }
}
