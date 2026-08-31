import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ThemeService } from '../../core/theme.service';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.html',
})
export class Navbar {
  theme = inject(ThemeService);

  links = [
    { label: 'About', fragment: 'about' },
    { label: 'Credentials', fragment: 'credentials' },
    { label: 'Projects', fragment: 'projects' },
  ];
}
