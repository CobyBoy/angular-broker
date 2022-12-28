import { Component, OnInit } from '@angular/core';
import { DropdownList } from 'src/app/models/dropdown-list';
import { Constants } from 'src/app/shared/constants';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  nosotrosList: DropdownList[] = Constants.NOSOTROS_LIST;
  cotizacionesList: DropdownList[] = Constants.COTIZACIONES_LIST;
  researchList: DropdownList[] = Constants.RESEARCH_LIST;
  inversionesList: DropdownList[] = Constants.INVERSIONES_LIST;

  constructor() {}

  ngOnInit(): void {}
}
