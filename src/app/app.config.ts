import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding, withRouterConfig } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { environment } from '../environments/environment.development';
import { AngularFireModule } from '@angular/fire/compat';

export const appConfig: ApplicationConfig = {
  providers: [
     provideZoneChangeDetection({ eventCoalescing: true }),
     provideRouter(routes, 
     withComponentInputBinding(),
     withRouterConfig({paramsInheritanceStrategy: 'always'})),
     provideHttpClient(),
     importProvidersFrom(AngularFireModule.initializeApp(environment.firebaseConfig))]

};

//ng add @angular/fire
