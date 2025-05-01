import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';
import { FeaturedPlaylists, Playlist } from '../models/playlists.types';
import { PORTAL_URL } from '../store/dashboard/constants';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  private readonly http = inject(HttpClient);

  getPlaylists(): Observable<Playlist[]> {
    return this.http.get<FeaturedPlaylists>(`${PORTAL_URL}/content`).pipe(
      map((data: FeaturedPlaylists) => data),
      catchError((error) => {
        return of(error.status);
      })
    );
  }
}
