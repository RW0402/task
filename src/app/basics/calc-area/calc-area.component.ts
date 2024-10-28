import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-calc-area',
  standalone: true,
  imports: [
    MatFormFieldModule,
    FormsModule,
    MatButtonModule,
    FormsModule,
    MatInputModule,
  ],
  templateUrl: './calc-area.component.html',
  styleUrl: '.././basics.component.scss'
})
export class CalcAreaComponent {
  area: number = 0;
  height: number = 0;
  width: number = 0;

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
}
