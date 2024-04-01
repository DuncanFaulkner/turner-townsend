import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { NavComponent } from './components/nav/nav.component';
import { loadDashboardData } from './store/dashboard/actions/dashboard.action';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'TurnerAndTownsend';

  #store = inject(Store);

  ngOnInit(): void {
    this.#store.dispatch(loadDashboardData());
  }
}
