import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { ProjectDetail } from './features/project-detail/project-detail';

export const routes: Routes = [
  { path: '', component: Home, title: 'Seth Sorrell — Software Engineer' },
  { path: 'projects/:slug', component: ProjectDetail, title: 'Project — Seth Sorrell' },
  { path: '**', redirectTo: '' },
];
