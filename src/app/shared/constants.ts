import { DropdownList } from '../models/dropdown-list';
import { SideNav } from '../models/side-nav';

export class Constants {
  public static JWT_TOKEN = 'jwtToken';
  public static GOOGLE_TOKEN = 'googleToken';
  public static NOSOTROS_LIST: DropdownList[] = [
    {
      item: 'Nuestra historia',
      link: 'https://portfoliopersonal.com/Nosotros/NuestraHistoria',
    },
    {
      item: 'Nuestro equipo',
      link: 'https://portfoliopersonal.com/Nosotros/NuestroEquipo',
    },
    {
      item: 'Nuestra identidad',
      link: 'https://portfoliopersonal.com/Nosotros/NuestraIdentidad',
    },
  ];
  public static COTIZACIONES_LIST: DropdownList[] = [
    { item: 'Home', link: 'https://portfoliopersonal.com/Cotizaciones' },
    {
      item: 'Acciones',
      link: 'https://portfoliopersonal.com/Cotizaciones/Acciones',
    },
    { item: 'Bonos', link: 'https://portfoliopersonal.com/Cotizaciones/Bonos' },
    {
      item: 'Cauciones',
      link: 'https://portfoliopersonal.com/Cotizaciones/Cauciones',
    },
    {
      item: 'Cedears',
      link: 'https://portfoliopersonal.com/Cotizaciones/Cedears',
    },
    {
      item: 'Fideicomisos financieros',
      link: 'https://portfoliopersonal.com/Cotizaciones/Fideicomisos',
    },
    {
      item: 'Futuros',
      link: 'https://portfoliopersonal.com/Cotizaciones/Futuros',
    },
    {
      item: 'Indices',
      link: 'https://portfoliopersonal.com/Cotizaciones/Indices',
    },
    { item: 'Letes', link: 'https://portfoliopersonal.com/Cotizaciones/Letes' },
    {
      item: 'Monedas',
      link: 'https://portfoliopersonal.com/Cotizaciones/Monedas',
    },
    {
      item: 'Opciones',
      link: 'https://portfoliopersonal.com/Cotizaciones/Opciones',
    },
    {
      item: 'Tasas de transferencia',
      link: 'https://portfoliopersonal.com/Cotizaciones/Tasas',
    },
    {
      item: 'Heatmap de mercado',
      link: 'https://portfoliopersonal.com/Cotizaciones/Heatmap',
    },
  ];

  public static RESEARCH_LIST: DropdownList[] = [
    { item: 'Home', link: 'https://portfoliopersonal.com/Research' },
    { item: 'Informes', link: '' },
    { item: 'Noticias', link: '' },
    { item: 'Calculadora de bonos', link: '' },
    { item: 'Análisis de bonos', link: '' },
    { item: 'Calendario bursátil', link: '' },
    { item: 'Calendario económico', link: '' },
    { item: 'Prensa', link: '' },
  ];

  public static INVERSIONES_LIST: DropdownList[] = [
    { item: 'Home', link: 'https://portfoliopersonal.com/Inversiones' },
    { item: 'Tutoriales', link: '' },
    { item: 'Acciones', link: '' },
    { item: 'Bonos', link: '' },
    { item: 'Cauciones', link: '' },
    { item: 'Cedears', link: '' },
    { item: 'Cheques de pago diferido', link: '' },
    { item: 'Fideicomisos financieros', link: '' },
    { item: 'Fondos comunes de inversión', link: '' },
    { item: 'Futuros', link: '' },
    { item: 'Indices', link: '' },
    { item: 'Letes', link: '' },
    { item: 'Monedas', link: '' },
    { item: 'Obligaciones negociables', link: '' },
    { item: 'Opciones', link: '' },
  ];

  public static CONTACTO_LIST: DropdownList[] = [
    { item: 'Llamanos', link: '08003457599' },
    { item: 'Escribinos', link: 'consultas@portfoliopersonal.com' },
  ];

  public static SIDE_NAV: SideNav[] = [
    {
      title: 'Mi cuenta',
      dropdownItem: [
        {
          itemTitle: 'Estado de cuenta',
          link: '/account',
        },
        {
          itemTitle: 'Movimientos',
          link: 'transactions',
        },
        {
          itemTitle: 'Rendimiento de cuenta',
          link: 'rendimientos',
        },
        {
          itemTitle: 'Flujo de fondos proyectados',
        },
        {
          itemTitle: 'Mi perfil de inversor',
        },
        {
          itemTitle: 'Datos para DDJJ AFIP',
        },
        {
          itemTitle: 'Config. de notificaciones',
        },
      ],
      imgSource:
        'https://trading.portfoliopersonal.com/oldTrading/Images/NewLookAndFill/miCuenta.svg',
      hasDropdown: true,
    },
    {
      title: 'Cotizaciones',
      dropdownItem: [
        { itemTitle: 'Fondos locales(FCI)' },
        { itemTitle: 'Fondos del exterior' },
        { itemTitle: 'Acciones' },
        { itemTitle: 'Acciones del exterior' },
        { itemTitle: 'Bonos' },
        { itemTitle: 'Cauciones' },
        { itemTitle: 'Cedears' },
        { itemTitle: 'ETFs' },
        { itemTitle: 'Fideicomisos' },
        { itemTitle: 'Futuros' },
        { itemTitle: 'Indices' },
        { itemTitle: 'Letras' },
        { itemTitle: 'Monedas' },
        { itemTitle: 'Opciones' },
        { itemTitle: 'Tasas de referencia' },
        { itemTitle: 'Alertas' },
        { itemTitle: 'Heatmap de mercado' },
        { itemTitle: 'Watchlist' },
      ],
      imgSource:
        'https://trading.portfoliopersonal.com/oldTrading/Images/NewLookAndFill/cotizaciones.svg',
      hasDropdown: true,
    },
    {
      title: 'Operar',
      dropdownItem: [
        { itemTitle: 'Fondos locales(FCI)' },
        { itemTitle: 'Fondos del exterior' },
        { itemTitle: 'Acciones' },
        { itemTitle: 'Acciones del exterior' },
        { itemTitle: 'Bonos' },
        { itemTitle: 'Cauciones' },
        { itemTitle: 'Cedears' },
        { itemTitle: 'ETFs' },
        { itemTitle: 'Futuros' },
        { itemTitle: 'Letras' },
        { itemTitle: 'ON' },
        { itemTitle: 'Opciones' },
        { itemTitle: 'Dolar MEP | CCL' },
      ],
      imgSource:
        'https://trading.portfoliopersonal.com/oldTrading/Images/NewLookAndFill/operar.svg',
      hasDropdown: true,
    },
    {
      title: 'Estado de ordenes',
      imgSource:
        'https://trading.portfoliopersonal.com/oldTrading/Images/NewLookAndFill/estadoOrdenes.svg',
      hasDropdown: false,
    },
    {
      title: 'Ingresar | Retirar dinero',
      dropdownItem: [
        { itemTitle: 'Ingresar dinero' },
        { itemTitle: 'Retirar dinero' },
        { itemTitle: 'Mis cuentas bancarias' },
        { itemTitle: 'Ultimos movimientos' },
      ],
      imgSource:
        'https://trading.portfoliopersonal.com/oldTrading/Images/NewLookAndFill/ingresarRetirarDinero.svg',
      hasDropdown: true,
    },
    {
      title: 'Research',
      dropdownItem: [
        { itemTitle: 'Calendario bursátil' },
        { itemTitle: 'Calendario económico' },
        { itemTitle: 'Calendario licitaciones' },
        { itemTitle: 'Informes' },
        { itemTitle: 'Noticias' },
        { itemTitle: 'Tutoriales' },
        { itemTitle: 'Calculadora de bonos' },
        { itemTitle: 'Lanzamiento descubierto' },
        { itemTitle: 'Lanzamiento cubierto' },
        { itemTitle: 'Calculadora de cauciones' },
        { itemTitle: 'Arbitrador ADR/CEDEAR' },
      ],
      imgSource:
        'https://trading.portfoliopersonal.com/oldTrading/Images/NewLookAndFill/research.svg',
      hasDropdown: true,
      link: 'false',
    },
    {
      title: 'Gestiones',
      imgSource:
        'https://trading.portfoliopersonal.com/oldTrading/Images/NewLookAndFill/gestiones.svg',
      hasDropdown: false,
      link: 'https://trading.portfoliopersonal.com/Gestiones/Default',
    },
  ];
}
