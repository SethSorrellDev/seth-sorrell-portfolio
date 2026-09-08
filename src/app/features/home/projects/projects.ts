import { Component } from '@angular/core';
import { Card } from '../../../shared/ui/card/card';
import { Badge } from '../../../shared/ui/badge/badge';
import { PROJECTS } from '../../../core/projects.data';
import { ScrollRevealDirective } from '../../../shared/scroll-reveal.directive';

@Component({
  selector: 'app-projects',
  imports: [Card, Badge, ScrollRevealDirective],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  projects = PROJECTS;
}
