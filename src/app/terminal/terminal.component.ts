import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-terminal',
  templateUrl: './terminal.component.html',
  styleUrls: ['./terminal.component.scss']
})
export class TerminalComponent implements OnInit {
  @HostListener('document:click', ['$event'])
  click() {
    
    }

  constructor() { }

  ngOnInit(): void {
  }

}
