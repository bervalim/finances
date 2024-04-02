import { Component } from '@angular/core';
import { WelcomeFinancesComponent } from '../../components/welcome-finances/welcome-finances.component';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [WelcomeFinancesComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss',
})
export class HomepageComponent {}
