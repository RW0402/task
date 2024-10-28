import { Component } from '@angular/core';
import { User } from '../../../Datatypes';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-interface-task',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './interfaces.component.html',
  styleUrl: '.././basics.component.scss'
})
export class InterfacesComponent {
  users: User[] = [
    { name: 'Ricardo Wurkatz', age: 29, email: 'rw@prd.cloud' },
    { name: 'Baghi', age: 4 },
    { name: 'Max Mustermann', age: 22, email: 'max.mustermann@example.com' }
  ];
}
