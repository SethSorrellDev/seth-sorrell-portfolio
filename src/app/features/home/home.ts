import { Component, inject } from '@angular/core';
import { Hero } from './hero/hero';
import { About } from './about/about';
import { Credentials } from './credentials/credentials';
import { Projects } from './projects/projects';
import { Contact } from './contact/contact';
import { SeoService } from '../../core/seo.service';

@Component({
  selector: 'app-home',
  imports: [Hero, About, Credentials, Projects, Contact],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  private seo = inject(SeoService);

  constructor() {
    this.seo.update({
      title: 'Seth Sorrell — Software Engineer',
      description: 'Cintas Service Support Representative building a software engineering career from the plant floor up — four working apps, one identity layer, and a CS degree in progress.',
      path: '/',
    });
  }
}
