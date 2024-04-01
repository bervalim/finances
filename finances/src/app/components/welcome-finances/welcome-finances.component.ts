import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-welcome-finances',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './welcome-finances.component.html',
  styleUrl: './welcome-finances.component.scss',
})
export class WelcomeFinancesComponent {}
