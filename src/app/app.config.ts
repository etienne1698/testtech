import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { UserModule } from './user/user.module';

export const appConfig: ApplicationConfig = {
  providers: [UserModule, provideRouter(routes)]
};
