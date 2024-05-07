import { Routes, provideRouter } from '@angular/router';
import { AppComponent } from './app.component';
//import { BoxComponent } from './box/box.component';
import { ExampComponent } from './examp/examp.component';
//import { CalendarComponent } from './calendar/calendar.component';

export const appRoutes: Routes = [
    { path: '*', component: AppComponent },
    //{ path: 'box', component: BoxComponent },
    { path:'exam', component: ExampComponent},
    //{path: 'calen' ,component: CalendarComponent}
  ];