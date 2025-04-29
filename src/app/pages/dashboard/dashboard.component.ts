import {
  animate,
  query,
  stagger,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { BannerComponent } from '../../components/banner/banner.component';
import { SpinnerComponent } from '../../components/spinner/spinner.component';
import { TileComponent } from '../../components/tile/tile.component';
import { Playlist } from '../../interfaces/playlists.interface';
import {
  selectPlaylistData,
  selectPlaylistLoading,
} from '../../store/dashboard/selectors/dashboard.selector';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.scss',
    animations: [
        trigger('listAnimation', [
            transition('* <=> *', [
                query(':enter', [
                    style({ opacity: 0 }),
                    stagger('150ms', animate('600ms ease-out', style({ opacity: 1 }))),
                ], { optional: true }),
                query(':leave', animate('200ms', style({ opacity: 0 })), {
                    optional: true,
                }),
            ]),
        ]),
    ],
    imports: [
        AsyncPipe,
        MatListModule,
        MatFormFieldModule,
        MatIconModule,
        FormsModule,
        MatInputModule,
        ReactiveFormsModule,
        BannerComponent,
        TileComponent,
        SpinnerComponent,
    ]
})
export class DashboardComponent {
  private readonly store = inject(Store);

  protected playlists$: Observable<Playlist[] | null> =
    this.store.select(selectPlaylistData);

  protected loading$: Observable<boolean> = this.store.select(
    selectPlaylistLoading
  );
}
