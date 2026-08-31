import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.html',
})
export class Footer {
  year = new Date().getFullYear();

  socials = [
    { label: 'GitHub', href: 'https://github.com/SethSorrellDev' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/REPLACE-ME' },
    { label: 'Email', href: 'mailto:REPLACE-ME@example.com' },
  ];
}
