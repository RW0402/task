import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { User } from '../../Datatypes';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-basics',
  standalone: true,
  imports: [
    MatInputModule,
    FormsModule,
    CommonModule,
    MatButtonModule
  ],
  templateUrl: './basics.component.html',
  styleUrl: './basics.component.scss'
})
export class BasicsComponent {
  area: number = 0;
  height: number = 0;
  width: number = 0;
  users: User[] = [
    { name: 'Ricardo Wurkatz', age: 29, email: 'rw@prd.cloud' },
    { name: 'Baghi', age: 4 },
    { name: 'Max Mustermann', age: 22, email: 'max.mustermann@example.com' }
  ];
  inputArray: any[] = [1, 'name', {name: 'tim', age: 22}, [1,2,3], 5];
  outputArray: any[] = [];

  public calculateArea(): void {


    this.area = this.calculateAreaLogic(this.height, this.width);
    console.log(this.area);
  }

  private calculateAreaLogic(a: number, b: number): number {
    if (a === 0 || b === 0) {
      return 0;
    }
    if (a < 0 || b < 0) {
      return -1;
    }
    return a * b;
  }
  public reverseArray(): void {
    this.outputArray = this.inputArray.reverse();
    console.log(this.outputArray);
  }
}
