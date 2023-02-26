import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  {
    path: '', component: RegisterComponent, title: 'Register',
    children: [
      {
        path: 'signin', component:SignInComponent, title: 'Sign in',
      },
      {
        path:'signup', component: SignUpComponent,title: 'Sign Up',
      }
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
