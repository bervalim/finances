import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideToastr } from 'ngx-toastr';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideToastr({
      timeOut: 1700,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
      closeButton: true,
      tapToDismiss: true,
    }),
  ],
};
