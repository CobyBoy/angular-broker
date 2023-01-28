import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from '../components/spinner/spinner.component';
import { ToastComponent } from '../components/toast/toast.component';



@NgModule({
  declarations: [
    SpinnerComponent,
    ToastComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [SpinnerComponent, ToastComponent]
  
})
export class SharedModule { }
