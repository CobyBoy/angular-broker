import { Component, OnInit } from '@angular/core';
import { DropdownList } from 'src/app/models/dropdown-list';
import { Constants } from 'src/app/shared/constants';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  nosotrosList: DropdownList[] = Constants.NOSOTROS_LIST;
  cotizacionesList: DropdownList[] = Constants.COTIZACIONES_LIST;
  researchList: DropdownList[] = Constants.RESEARCH_LIST;
  inversionesList: DropdownList[] = Constants.INVERSIONES_LIST;
  contactoList: DropdownList[] = Constants.CONTACTO_LIST;

  constructor() {}

  ngOnInit(): void {}
}
