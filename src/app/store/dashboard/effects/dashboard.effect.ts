import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, of } from 'rxjs';
import { DashboardService } from '../../../services/playlists.service';
import {
  getPlaylists,
  getPlaylistsFailure,
  getPlaylistsSuccess,
  loadDashboardData,
} from '../actions/dashboard.action';

@Injectable()
export class DashboardEffects {
  #action$ = inject(Actions);
  #dashboardService = inject(DashboardService);

  getPlaylists$ = createEffect(() => {
    return this.#action$.pipe(
      ofType(getPlaylists, loadDashboardData),
      exhaustMap(() =>
        this.#dashboardService.getPlaylists().pipe(
          map((playlist) => getPlaylistsSuccess({ playlist })),
          catchError((error) => of(getPlaylistsFailure({ error })))
        )
      )
    );
  });
}
