import { Component, OnInit } from '@angular/core';
import { DropdownList } from 'src/app/models/dropdown-list';
import { Constants } from 'src/app/shared/constants';

@Component({
  selector: 'app-home-footer',
  templateUrl: './home-footer.component.html',
  styleUrls: ['./home-footer.component.scss'],
})
export class HomeFooterComponent implements OnInit {
  nosotrosList: DropdownList[] = Constants.NOSOTROS_LIST;
  cotizacionesList: DropdownList[] = Constants.COTIZACIONES_LIST;
  researchList: DropdownList[] = Constants.RESEARCH_LIST;
  inversionesList: DropdownList[] = Constants.INVERSIONES_LIST;
  contactoList: DropdownList[] = Constants.CONTACTO_LIST;

  constructor() {}

  ngOnInit(): void {}
}
