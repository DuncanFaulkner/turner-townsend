import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import {
  HttpTestingController,
  provideHttpClientTesting,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Playlist } from '../models/playlists.types';
import { PORTAL_URL } from '../store/dashboard/constants';
import { fakePlaylistData } from '../test/fake-test-data';
import { DashboardService } from './playlists.service';

describe('Dashboard Service', () => {
  let dashboardService: DashboardService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        provideHttpClient(withInterceptorsFromDi()),
        provideHttpClientTesting(),
      ],
    });
    dashboardService = TestBed.inject(DashboardService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should create service', () => {
    expect(dashboardService).toBeTruthy();
  });

  it('should return playlist from api call', () => {
    dashboardService.getPlaylists().subscribe((playlist: Playlist[]) => {
      expect(playlist).toEqual([...fakePlaylistData]);
    });

    const controller = httpTestingController.expectOne(`${PORTAL_URL}/content`);

    expect(controller.request.method).toBe('GET');
    controller.flush([...fakePlaylistData]);
  });
});
