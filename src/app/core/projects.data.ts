import { BadgeTone } from '../shared/ui/badge/badge';

export interface Project {
  slug: string;
  name: string;
  tagline: string;
  statusLabel: string;
  statusTone: BadgeTone;
  stack: string[];
  liveUrl?: string;
}

export const PROJECTS: Project[] = [
  {
    slug: 'fleetcheck',
    name: 'FleetCheck',
    tagline: 'Vehicle inspection reporting with four-role RBAC and a full audit trail.',
    statusLabel: 'Deployed',
    statusTone: 'route',
    stack: ['Spring Boot', 'React', 'TypeScript', 'Docker', 'PostgreSQL'],
  },
  {
    slug: 'route-optimizer',
    name: 'RouteOptimizer',
    tagline: 'A VRPTW routing engine that plans multi-stop driver routes against real time windows.',
    statusLabel: 'Deployed',
    statusTone: 'route',
    stack: ['Flask', 'PostgreSQL', 'Leaflet', 'OpenRouteService'],
    liveUrl: 'https://routeoptimizer-fgk8.onrender.com',
  },
  {
    slug: 'assistant-scheduler',
    name: 'AssistantScheduler',
    tagline: 'Workforce shift scheduling with RBAC, real-time notifications, and a full audit log.',
    statusLabel: 'In Progress',
    statusTone: 'dispatch',
    stack: ['Flask', 'SQLAlchemy', 'Socket.IO'],
  },
  {
    slug: 'route-book',
    name: 'RouteBook',
    tagline: 'The fleet records system tying stops, drivers, and routes back to a shared history.',
    statusLabel: 'Deployed',
    statusTone: 'route',
    stack: ['Spring Boot', 'React', 'TypeScript'],
  },
];
