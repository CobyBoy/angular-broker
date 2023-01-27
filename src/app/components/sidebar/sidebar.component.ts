import { Component, OnInit, Renderer2 } from '@angular/core';
import { SideNav } from 'src/app/models/side-nav';
import { Constants } from 'src/app/shared/constants';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  previousElement!: HTMLElement;

  sideNavTitles: SideNav[] = Constants.SIDE_NAV;

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {}

  toggle(element: HTMLElement) {
    if (!this.previousElement || element === this.previousElement) {
      this.previousElement = element;
      element.classList.contains('dropdown__list--hidden')
        ? this.renderer.removeClass(element, 'dropdown__list--hidden')
        : this.renderer.addClass(element, 'dropdown__list--hidden');
    } else {
      if (!this.previousElement.classList.contains('dropdown__list--hidden')) {
        this.renderer.addClass(this.previousElement, 'dropdown__list--hidden');
      }

      this.renderer.removeClass(element, 'dropdown__list--hidden');
      this.previousElement = element;
    }
  }
}
