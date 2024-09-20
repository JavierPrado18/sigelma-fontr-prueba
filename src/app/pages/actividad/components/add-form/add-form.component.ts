import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-add-form',
  standalone: true,
  imports: [MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose, MatButtonModule,MatFormFieldModule, MatInputModule, MatSelectModule],
  templateUrl: './add-form.component.html',
  styleUrl: './add-form.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddFormComponent {

}
