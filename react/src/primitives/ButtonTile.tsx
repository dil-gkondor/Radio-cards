import { forwardRef } from 'react';
import type { ButtonHTMLAttributes, PropsWithChildren } from 'react';

/**
 * Atlas Button Tile primitive — interactive surface that mirrors the Atlas
 * design-system Button Tile. Renders a <button> with the tile chrome and
 * leaves child composition to the consumer.
 */
export interface ButtonTileProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    PropsWithChildren {}

export const ButtonTile = forwardRef<HTMLButtonElement, ButtonTileProps>(
  function ButtonTile({ children, className, type = 'button', ...rest }, ref) {
    const classes = ['atlas-button-tile', className].filter(Boolean).join(' ');
    return (
      <button ref={ref} type={type} className={classes} {...rest}>
        {children}
      </button>
    );
  },
);
