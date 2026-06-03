import { Routes } from '@angular/router';
import { EveningComponentComponent } from './components/evening-component/evening-component.component';
import { MorningComponentComponent } from './components/morning-component/morning-component.component';

export const routes: Routes = [
    { path: 'morning', component: MorningComponentComponent },
  { path: 'evening', component: EveningComponentComponent },
  { path: '', redirectTo: 'morning', pathMatch: 'full' }
];
