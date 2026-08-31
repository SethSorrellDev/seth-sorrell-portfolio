import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.html',
})
export class Footer {
  year = new Date().getFullYear();

  socials = [
    { label: 'GitHub', href: 'https://github.com/SethSorrellDev' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/seth-sorrell-2b7040406' },
    { label: 'Email', href: 'mailto:smsorrell27@gmail.com' },
  ];
}
