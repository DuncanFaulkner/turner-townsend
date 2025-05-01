import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, of, tap } from 'rxjs';
import { DashboardService } from '../../../services/playlists.service';
import {
  getPlaylists,
  getPlaylistsFailure,
  getPlaylistsSuccess,
  loadDashboardData,
} from '../actions/dashboard.action';

@Injectable()
export class DashboardEffects {
  private readonly action = inject(Actions);
  private readonly dashboardService = inject(DashboardService);

  getPlaylists$ = createEffect(() => {
    return this.action.pipe(
      ofType(getPlaylists, loadDashboardData),
      exhaustMap(() =>
        this.dashboardService.getPlaylists().pipe(
          map((playlist) => getPlaylistsSuccess({ playlist })),
          tap((playlist) => console.log(playlist)),
          catchError((error) => of(getPlaylistsFailure({ error })))
        )
      )
    );
  });
}
