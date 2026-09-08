import { Component } from '@angular/core';
import { Card } from '../../../shared/ui/card/card';
import { Badge, BadgeTone } from '../../../shared/ui/badge/badge';
import { ScrollRevealDirective } from '../../../shared/scroll-reveal.directive';

interface Credential {
  name: string;
  issuer: string;
  status: string;
  tone: BadgeTone;
}

@Component({
  selector: 'app-credentials',
  imports: [Card, Badge, ScrollRevealDirective],
  templateUrl: './credentials.html',
  styleUrl: './credentials.css',
})
export class Credentials {
  credentials: Credential[] = [
    { name: 'B.S. Computer Science', issuer: 'Indiana University Online — expected 2028', status: 'In Progress', tone: 'route' },
    { name: 'CompTIA Project+', issuer: 'CompTIA', status: 'Active Study', tone: 'dispatch' },
    { name: 'SAP Fundamentals', issuer: 'openSAP', status: 'Queued', tone: 'slate' },
    { name: 'CompTIA Security+', issuer: 'CompTIA', status: 'Queued', tone: 'slate' },
  ];
}
