import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [MatToolbarModule],
  template: `<mat-toolbar color="secondary">
    <mat-toolbar-row>
      <span>{{ title }}</span>
    </mat-toolbar-row>
  </mat-toolbar> `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavComponent {
  @Input() title!: string;
}
