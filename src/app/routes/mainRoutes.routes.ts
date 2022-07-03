import { Routes } from '@angular/router';

export class MainRoutes {
  public static readonly HOME = '';
  public static readonly FAQ = 'faq';
  public static readonly SEARCH = 'search';
  static loadChildrens(): Routes {
    return [
      {
        path: MainRoutes.HOME,
        loadChildren: () =>
          import('../pages/home/home.module').then((p) => p.HomeModule),
      },
      {
        path: MainRoutes.FAQ,
        loadChildren: () =>
          import('../pages/faq/faq.module').then((p) => p.FaqModule),
      },
      {
        path: MainRoutes.SEARCH,
        loadChildren: () =>
          import('../pages/search-phone/search-phone.module').then(
            (p) => p.SearchPhoneModule
          ),
      },
    ];
  }
}
