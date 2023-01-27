import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RootRoutingModule } from './root-routing.module';
import { MainHeaderComponent } from './main-header/main-header.component';
import { MainFooterComponent } from './main-footer/main-footer.component';
import { MainComponent } from './main.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { AccountComponent } from './account/account.component';
import { TransactionsComponent } from './transactions/transactions.component';


@NgModule({
  declarations: [
    MainComponent,
    MainHeaderComponent,
    MainFooterComponent,
    SidebarComponent,
    AccountComponent,
    TransactionsComponent,
  ],
  imports: [CommonModule, RootRoutingModule],
})
export class RootModule {}
