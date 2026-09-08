import { Component, computed, effect, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PROJECTS } from '../../core/projects.data';
import { Badge } from '../../shared/ui/badge/badge';
import { Button } from '../../shared/ui/button/button';
import { SeoService } from '../../core/seo.service';

@Component({
  selector: 'app-project-detail',
  imports: [RouterLink, Badge, Button],
  templateUrl: './project-detail.html',
  styleUrl: './project-detail.css',
})
export class ProjectDetail {
  slug = input.required<string>();
  private seo = inject(SeoService);

  project = computed(() => PROJECTS.find((p) => p.slug === this.slug()));

  nextProject = computed(() => {
    const index = PROJECTS.findIndex((p) => p.slug === this.slug());
    if (index === -1) return undefined;
    return PROJECTS[(index + 1) % PROJECTS.length];
  });

  constructor() {
    effect(() => {
      const p = this.project();
      if (p) {
        this.seo.update({
          title: `${p.name} — Seth Sorrell`,
          description: p.tagline,
          path: `/projects/${p.slug}`,
        });
      }
    });
  }
}
