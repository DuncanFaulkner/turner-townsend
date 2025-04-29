import { provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action, StoreModule } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { cold, hot } from 'jasmine-marbles';
import { Observable, of, throwError } from 'rxjs';
import { DashboardService } from '../../../services/playlists.service';
import { fakePlaylistData } from '../../../test/fake-test-data';
import {
  getPlaylists,
  getPlaylistsFailure,
  getPlaylistsSuccess,
} from '../actions/dashboard.action';
import { DashboardEffects } from './dashboard.effect';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

describe('dashboard effects', () => {
  let actions$ = new Observable<Action>();
  let dashboardEffects: DashboardEffects;
  let dashboardService: DashboardService;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [StoreModule.forRoot({})],
    providers: [
        DashboardEffects,
        provideMockActions(() => actions$),
        provideMockStore({}),
        DashboardService,
        provideHttpClient(withInterceptorsFromDi()),
        provideHttpClientTesting(),
    ]
});
    dashboardEffects = TestBed.inject(DashboardEffects);
    dashboardService = TestBed.inject(DashboardService);
  });

  it('should dispatch a success after making call to api', () => {
    jest
      .spyOn(dashboardService, 'getPlaylists')
      .mockReturnValue(of([...fakePlaylistData]));

    actions$ = hot('-a-|', { a: getPlaylists() });

    const expected = cold('-a-|', {
      a: getPlaylistsSuccess({ playlist: [...fakePlaylistData] }),
    });

    expect(dashboardEffects.getPlaylists$).toBeObservable(expected);
  });

  it('should dispatch a failure after making a call to api', () => {
    jest
      .spyOn(dashboardService, 'getPlaylists')
      .mockReturnValue(throwError(() => new Error('')));

    actions$ = hot('-a-|', { a: getPlaylists() });

    const expected = cold('-a-|', {
      a: getPlaylistsFailure({ error: new Error() }),
    });

    expect(dashboardEffects.getPlaylists$).toBeObservable(expected);
  });
});
