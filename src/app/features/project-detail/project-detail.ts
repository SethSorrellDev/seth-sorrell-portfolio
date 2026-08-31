import { Component, computed, input } from '@angular/core';
import { PROJECTS } from '../../core/projects.data';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.html',
  styleUrl: './project-detail.css',
})
export class ProjectDetail {
  slug = input.required<string>();
  project = computed(() => PROJECTS.find((p) => p.slug === this.slug()));
}
