import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserListComponent } from "./user-list/user-list.component";
import { NavigationComponent } from "./navigation/navigation.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserListComponent, NavigationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'task';
}
