import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
@Component({
  selector: 'app-tile',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './tile.component.html',
  styleUrl: './tile.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TileComponent {
  @Input() img!: string;
  @Input() url!: string;

  goToPage(): void {
    window.open(this.url, '_blank');
  }
}
