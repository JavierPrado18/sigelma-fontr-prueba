import { AfterViewInit, ChangeDetectionStrategy,Component, inject, ViewChild } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialog } from '@angular/material/dialog';
import { AddFormComponent } from './components/add-form/add-form.component';



export interface Actividad {
  id: number;
  descripcion: string;
  
}

@Component({
  selector: 'app-actividad',
  standalone: true,
  imports: [MatCardModule,MatCardModule,MatGridListModule,MatButtonModule,MatIconModule,MatFormFieldModule, MatInputModule, MatTableModule, MatSortModule, MatPaginatorModule],
  templateUrl: './actividad.component.html',
  styleUrl: './actividad.component.css'
})
export default class ActividadComponent implements AfterViewInit {
  title= 'Actividad';
  displayedColumns: string[] = ['id', 'descripcion',"acciones"];
  dataSource: MatTableDataSource<Actividad>;

  @ViewChild(MatPaginator) paginator!: MatPaginator ;
  @ViewChild(MatSort) sort!: MatSort ;

  constructor() {
    const activities:Actividad[]=[
      {
        descripcion:"Actividad 1",
        id:1        
      },
      {
        descripcion:"Actividad 2",
        id:2     
      },
      {
        descripcion:"Actividad 3",
        id:3        
      },
      {
        descripcion:"Actividad 4",
        id:4        
      },
      {
        descripcion:"Actividad 5",
        id:6        
      },
      {
        descripcion:"Actividad 6",
        id:7       
      },
    ]
    this.dataSource = new MatTableDataSource(activities);
  }
  readonly dialog = inject(MatDialog);
  
    openDialog() {
      this.dialog.open(AddFormComponent);
    }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}

