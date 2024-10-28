import { Routes } from '@angular/router';
import { SmileyComponent } from './smiley/smiley.component';
import { BasicsComponent } from './basics/basics.component';
import { UserListComponent } from './user-list/user-list.component';

export const routes: Routes = [
  { path: 'smiley', component: SmileyComponent },
  { path: 'basics', component: BasicsComponent },
  { path: 'app', component: UserListComponent }
];
