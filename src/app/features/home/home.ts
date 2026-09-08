import { Component } from '@angular/core';
import { Hero } from './hero/hero';
import { About } from './about/about';
import { Credentials } from './credentials/credentials';
import { Projects } from './projects/projects';
import { Contact } from './contact/contact';

@Component({
  selector: 'app-home',
  imports: [Hero, About, Credentials, Projects, Contact],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
