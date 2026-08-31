import { Component, computed, input } from '@angular/core';

export type BadgeTone = 'route' | 'dispatch' | 'signal' | 'slate';

const TONE_CLASSES: Record<BadgeTone, string> = {
  route: 'bg-route/10 text-route border-route/30',
  dispatch: 'bg-dispatch/10 text-dispatch border-dispatch/30',
  signal: 'bg-signal/10 text-signal border-signal/30',
  slate: 'bg-slate/10 text-slate border-slate/30',
};

@Component({
  selector: 'app-badge',
  templateUrl: './badge.html',
})
export class Badge {
  tone = input<BadgeTone>('slate');
  classes = computed(() => TONE_CLASSES[this.tone()]);
}
