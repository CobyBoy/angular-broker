import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  selectedTab: string = 'Sign In';

  constructor() {}

  ngOnInit(): void {}

  getTab(tab: string) {
    this.selectedTab = tab;
  }
}
