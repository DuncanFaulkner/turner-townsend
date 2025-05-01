import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
@Component({
  selector: 'app-nav',
  imports: [MatToolbarModule],
  template: `<mat-toolbar color="secondary">
    <mat-toolbar-row>
      <span data-testid="title">{{ title() }}</span>
    </mat-toolbar-row>
  </mat-toolbar> `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavComponent {
  readonly title = input.required<string>();
}
