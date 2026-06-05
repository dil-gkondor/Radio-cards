import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  ViewEncapsulation,
} from '@angular/core';

/**
 * Atlas Button Tile primitive — interactive surface mirroring Atlas's
 * Button Tile. Host element is a <button>; consumers project content.
 */
@Component({
  selector: 'button[appButtonTile]',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  template: '<ng-content></ng-content>',
})
export class ButtonTileComponent {
  @HostBinding('class.atlas-button-tile') readonly base = true;
  @HostBinding('attr.type') readonly buttonType = 'button';
}
