import { Component, computed, input } from '@angular/core';
import { RouterLink } from '@angular/router';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost';

const VARIANT_CLASSES: Record<ButtonVariant, string> = {
  primary: 'bg-dispatch text-white hover:bg-dispatch/90',
  secondary: 'border border-slate/40 text-ink dark:text-paper hover:border-dispatch',
  ghost: 'text-slate hover:text-dispatch',
};

@Component({
  selector: 'app-button',
  imports: [RouterLink],
  templateUrl: './button.html',
})
export class Button {
  variant = input<ButtonVariant>('primary');
  href = input<string>();
  routerLink = input<string>();
  fragment = input<string>();
  download = input(false);

  classes = computed(
    () =>
      `inline-flex items-center gap-2 px-6 py-3 rounded-full font-mono text-sm transition-colors duration-200 ${VARIANT_CLASSES[this.variant()]}`
  );
}
