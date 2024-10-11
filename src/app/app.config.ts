import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding, withRouterConfig } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [
     provideZoneChangeDetection({ eventCoalescing: true }),
     provideRouter(routes, 
     withComponentInputBinding(),
     withRouterConfig({paramsInheritanceStrategy: 'always'})),
     provideHttpClient(), provideFirebaseApp(() => initializeApp({"projectId":"recipes-ee917","appId":"1:808578601351:web:a808c0365a8e563c6d0322","storageBucket":"recipes-ee917.appspot.com","apiKey":"AIzaSyD_bJ3S_E2i8SrxOax9KkqJ0ZjQTjmwC3Y","authDomain":"recipes-ee917.firebaseapp.com","messagingSenderId":"808578601351","measurementId":"G-0PDSYNZEQW"})), provideAuth(() => getAuth()), provideFirestore(() => getFirestore())]
     
};
