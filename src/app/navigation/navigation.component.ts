import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbar } from '@angular/material/toolbar';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-my-navigation',
  standalone: true,
  imports: [ MatToolbar, MatIconModule, RouterLink, RouterLinkActive, MatButton],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent {

}
