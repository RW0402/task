import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { User } from '../../Datatypes';
import { MatButtonModule } from '@angular/material/button';
import { CalcAreaComponent } from "./calc-area/calc-area.component";
import { InterfacesComponent } from "./interface-task/interfaces.component";
import { GenericsComponent } from "./generics/generics.component";


@Component({
  selector: 'app-basics',
  standalone: true,
  imports: [
    MatInputModule,
    FormsModule,
    CommonModule,
    MatButtonModule,
    CalcAreaComponent,
    InterfacesComponent,
    GenericsComponent
],
  templateUrl: './basics.component.html',
  styleUrl: './basics.component.scss'
})
export class BasicsComponent {

}
