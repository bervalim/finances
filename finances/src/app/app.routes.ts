import { Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { TrasactionpageComponent } from './pages/trasactionpage/trasactionpage.component';

export const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'transaction', component: TrasactionpageComponent },
];
