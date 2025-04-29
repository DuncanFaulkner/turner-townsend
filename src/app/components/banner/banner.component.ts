import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@Component({
    selector: 'app-banner',
    imports: [MatProgressBarModule],
    templateUrl: './banner.component.html',
    styleUrl: './banner.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class BannerComponent {
  readonly loading = input<boolean | null>(false);
}
