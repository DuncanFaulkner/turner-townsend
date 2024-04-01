import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';
import { FeaturedPlaylists, Playlist } from '../interfaces/playlists.interface';
import { PORTAL_URL } from '../store/dashboard/constants';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  #http = inject(HttpClient);

  getPlaylists(): Observable<Playlist[]> {
    return this.#http
      .get<FeaturedPlaylists>(`${PORTAL_URL}/featured-playlists.json`)
      .pipe(
        map((data: FeaturedPlaylists) => data.featuredPlaylists.content),
        catchError((error) => {
          return of(error.status);
        })
      );
  }
}
