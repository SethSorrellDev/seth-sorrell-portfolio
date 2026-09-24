import { Component } from '@angular/core';
import { Button } from '../../../shared/ui/button/button';

interface RouteNode {
  label: string;
  sublabel: string;
  x: number;
  y: number;
  kind: 'origin' | 'project' | 'destination';
}

@Component({
  selector: 'app-hero',
  imports: [Button],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {
  viewBox = '0 0 1200 400';

  nodes: RouteNode[] = [
    { label: 'Frankfort Plant', sublabel: 'ASSR — Current Role', x: 60, y: 320, kind: 'origin' },
    { label: 'AssistantScheduler', sublabel: 'Workforce scheduling', x: 260, y: 260, kind: 'project' },
    { label: 'RouteOptimizer', sublabel: 'VRPTW routing engine', x: 480, y: 200, kind: 'project' },
    { label: 'FleetCheck', sublabel: 'Inspection RBAC', x: 700, y: 150, kind: 'project' },
    { label: 'RouteBook', sublabel: 'Fleet records', x: 920, y: 190, kind: 'project' },
    { label: 'Career Goal', sublabel: 'Software Engineer Intern', x: 1140, y: 80, kind: 'destination' },
  ];

  get pathD(): string {
    return this.nodes.map((n, i) => `${i === 0 ? 'M' : 'L'} ${n.x} ${n.y}`).join(' ');
  }
}
