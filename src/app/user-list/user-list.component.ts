import { AfterViewInit, Component, inject, OnInit, ViewChild } from '@angular/core';
import {  MatButtonModule } from '@angular/material/button';
import { UserService } from './user.service';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { UserTable } from '../../Datatypes';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { UserDataDialogComponent } from '../user-data-dialog/user-data-dialog.component';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent implements OnInit, AfterViewInit {
  dataSource = new MatTableDataSource<UserTable>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  displayedColumns: string[] = ['id', 'fullName', 'email'];

  readonly dialog = inject(MatDialog);

  constructor(
    public userService: UserService,
  ) {
  }

  ngOnInit() {
    this.userService.getUsers().subscribe((data: UserTable[]) => {
      this.dataSource.data = data;
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }


  openDialog(user: UserTable) {
    const cfg = new MatDialogConfig();

    cfg.width = '600px';
    cfg.height = '400px';
    cfg.disableClose = true;
    cfg.data = user;
    return this.dialog.open(UserDataDialogComponent, cfg);

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
