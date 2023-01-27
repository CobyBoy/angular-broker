import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from '../not-found/not-found.component';
import { AccountComponent } from './account/account.component';
import { MainComponent } from './main.component';
import { TransactionsComponent } from './transactions/transactions.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        component: AccountComponent,
        title: 'Account'
      },
      {
        path: 'transactions',
        component: TransactionsComponent,
        title: 'Transactions'
      },
      { path: '**', component: NotFoundComponent, title: '404 error' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RootRoutingModule { }
