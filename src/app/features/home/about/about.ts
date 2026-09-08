import { Component } from '@angular/core';
import { Badge } from '../../../shared/ui/badge/badge';
import { ScrollRevealDirective } from '../../../shared/scroll-reveal.directive';

@Component({
  selector: 'app-about',
  imports: [Badge, ScrollRevealDirective],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {}
