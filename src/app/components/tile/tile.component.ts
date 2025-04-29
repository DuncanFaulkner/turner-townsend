import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
@Component({
    selector: 'app-tile',
    imports: [MatCardModule],
    templateUrl: './tile.component.html',
    styleUrl: './tile.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TileComponent {
  readonly img = input.required<string>();
  readonly url = input.required<string>();

  goToPage(): void {
    window.open(this.url(), '_blank');
  }
}
