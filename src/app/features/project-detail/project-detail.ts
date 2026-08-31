import { Component, computed, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PROJECTS } from '../../core/projects.data';
import { Badge } from '../../shared/ui/badge/badge';
import { Button } from '../../shared/ui/button/button';

@Component({
  selector: 'app-project-detail',
  imports: [RouterLink, Badge, Button],
  templateUrl: './project-detail.html',
  styleUrl: './project-detail.css',
})
export class ProjectDetail {
  slug = input.required<string>();

  project = computed(() => PROJECTS.find((p) => p.slug === this.slug()));

  nextProject = computed(() => {
    const index = PROJECTS.findIndex((p) => p.slug === this.slug());
    if (index === -1) return undefined;
    return PROJECTS[(index + 1) % PROJECTS.length];
  });
}
