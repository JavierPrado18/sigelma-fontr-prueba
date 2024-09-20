import {ChangeDetectionStrategy, Component,inject } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { TablaInventarioComponent } from './components/tabla-inventario/tabla-inventario.component';
import {MatIconModule,} from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {
  MatDialog,
} from '@angular/material/dialog';
import { FormModalComponent } from './components/form-modal/form-modal.component';

@Component({
  selector: 'app-lote',
  standalone: true,
  imports: [MatToolbarModule,TablaInventarioComponent,MatIconModule,MatButtonModule,FormModalComponent],
  templateUrl: './lote.component.html',
  styleUrl: './lote.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class LoteComponent {
    readonly dialog = inject(MatDialog);
  
    openDialog() {
      this.dialog.open(FormModalComponent);
    }
}
