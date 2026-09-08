import { Directive, ElementRef, DestroyRef, afterNextRender, inject, input } from '@angular/core';

@Directive({
  selector: '[appScrollReveal]',
})
export class ScrollRevealDirective {
  private el = inject(ElementRef<HTMLElement>);
  private destroyRef = inject(DestroyRef);
  delay = input(0, { alias: 'appScrollReveal' });

  constructor() {
    afterNextRender(async () => {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReducedMotion) return;

      try {
        const { gsap } = await import('gsap');
        const { ScrollTrigger } = await import('gsap/ScrollTrigger');
        gsap.registerPlugin(ScrollTrigger);

        gsap.set(this.el.nativeElement, { opacity: 0, y: 32 });

        const tween = gsap.to(this.el.nativeElement, {
          opacity: 1,
          y: 0,
          duration: 0.7,
          delay: this.delay() / 1000,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: this.el.nativeElement,
            start: 'top 85%',
            once: true,
          },
        });

        this.destroyRef.onDestroy(() => {
          tween.scrollTrigger?.kill();
          tween.kill();
        });
      } catch {
        // GSAP failed to load — fail open, content stays visible.
      }
    });
  }
}
