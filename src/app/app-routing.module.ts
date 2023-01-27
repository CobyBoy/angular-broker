import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/guards/auth.guard';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { TerminalComponent } from './components/terminal/terminal.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
    title: 'Home',
  },
  {
    path: 'register',
    loadChildren: () =>
      import('./auth/auth.module').then((module) => module.AuthModule),
  },
  {
    path: 'account',
    loadChildren: () => import('./components/root/root.module').then((module) => module.RootModule)
  },
  {
    path: 'terminal',
    component: TerminalComponent,
    canActivate: [AuthGuard],
    title: 'Terminal',
  },
  { path: '**', component: NotFoundComponent, title: '404 error' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
