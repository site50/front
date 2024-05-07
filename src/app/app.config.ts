import { ApplicationConfig } from '@angular/core';
import { provideRouter, Routes } from "@angular/router";
import {appRoutes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(appRoutes),
    provideAnimations(), provideHttpClient() //for work router of com-t with service!!!
  ]
};


