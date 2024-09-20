import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-custom-form',
  standalone: true,
  imports: [MatCardModule,MatChipsModule,MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule, MatIconModule],
  templateUrl: './custom-form.component.html',
  styleUrl: './custom-form.component.css'
})
export class CustomFormComponent {
  @Input()
  formTitle:String='';

  initialValue='';
}
