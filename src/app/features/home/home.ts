import { Component, inject } from '@angular/core';
import { ThemeService } from '../../core/theme.service';
import { Button } from '../../shared/ui/button/button';
import { Badge } from '../../shared/ui/badge/badge';
import { Card } from '../../shared/ui/card/card';

@Component({
  selector: 'app-home',
  imports: [Button, Badge, Card],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  theme = inject(ThemeService);
}
