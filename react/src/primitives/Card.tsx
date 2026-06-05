import { forwardRef } from 'react';
import type { HTMLAttributes, PropsWithChildren } from 'react';

/**
 * Atlas Card primitive — minimal surface wrapper that mirrors the Atlas
 * design-system Card. Visual only; consumers add interactive behavior.
 *
 * In the real Atlas codebase this would import from
 * `@diligentcorp/atlas-components-react`; we re-create the surface locally so
 * this repo stays self-contained and the same token contract still applies.
 */
export interface CardProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'children'>,
    PropsWithChildren {}

export const Card = forwardRef<HTMLDivElement, CardProps>(function Card(
  { children, className, ...rest },
  ref,
) {
  const classes = ['atlas-card', className].filter(Boolean).join(' ');
  return (
    <div ref={ref} className={classes} {...rest}>
      {children}
    </div>
  );
});
