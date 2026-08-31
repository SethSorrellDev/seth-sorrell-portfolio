import { Component } from '@angular/core';
import { Card } from '../../../shared/ui/card/card';
import { Badge } from '../../../shared/ui/badge/badge';
import { PROJECTS } from '../../../core/projects.data';

@Component({
  selector: 'app-projects',
  imports: [Card, Badge],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  projects = PROJECTS;
}
