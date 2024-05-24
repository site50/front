import { Routes, provideRouter } from '@angular/router';
import { AppComponent } from './app.component';
import { ExampComponent } from './examp/examp.component';

export const appRoutes: Routes = [
    { path: '*', component: AppComponent },
    { path:'task', component: ExampComponent},
  ];