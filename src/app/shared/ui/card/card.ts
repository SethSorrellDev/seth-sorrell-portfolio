import { Component, computed, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-card',
  imports: [RouterLink],
  templateUrl: './card.html',
})
export class Card {
  routerLink = input<string>();
  ariaLabel = input<string>();

  classes = computed(() => {
    const base = 'relative block h-full rounded-2xl border border-slate/15 dark:border-white/10 bg-white dark:bg-white/5 p-6';
    const interactive = 'transition-all duration-300 hover:-translate-y-1 hover:border-dispatch/40 hover:shadow-lg hover:shadow-dispatch/5';
    return this.routerLink() ? `${base} ${interactive}` : base;
  });
}
