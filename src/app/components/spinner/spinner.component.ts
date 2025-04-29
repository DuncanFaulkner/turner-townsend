import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
@Component({
    selector: 'app-spinner',
    imports: [MatProgressSpinnerModule],
    template: `<mat-spinner mode="indeterminate"></mat-spinner>`,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SpinnerComponent {}
