import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'lote-form-modal',
  standalone: true,
  imports: [MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose, MatButtonModule,MatFormFieldModule, MatInputModule, MatSelectModule],
  templateUrl: './form-modal.component.html',
  styleUrl: './form-modal.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  

})
export class FormModalComponent {

}