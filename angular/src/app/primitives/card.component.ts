import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  ViewEncapsulation,
} from '@angular/core';

/**
 * Atlas Card primitive — minimal surface wrapper mirroring the Atlas
 * design-system Card. Pure visual; interaction is added by consumers.
 */
@Component({
  selector: 'app-card',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  template: '<ng-content></ng-content>',
})
export class CardComponent {
  @HostBinding('class.atlas-card') readonly base = true;
}
