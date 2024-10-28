import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-generics',
  standalone: true,
  imports: [
    MatButtonModule
  ],
  templateUrl: './generics.component.html',
  styleUrl: '.././basics.component.scss'
})
export class GenericsComponent {
  public inputArray: any[] = [1, 'name', {name: 'tim', age: 22}, [1,2,3], 5];
  public outputArray: any[] = [];

  public reverseArray(): void {
    this.outputArray = this.inputArray.reverse();
    console.log(this.outputArray);
  }
}
