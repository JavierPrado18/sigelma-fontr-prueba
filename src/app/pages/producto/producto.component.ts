import {ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';

@Component({
  selector: 'app-producto',
  standalone: true,
  imports: [MatCardModule,MatChipsModule,MatFormFieldModule, MatInputModule, MatIconModule,MatButtonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css'
})
export default class ProductoComponent {

}
