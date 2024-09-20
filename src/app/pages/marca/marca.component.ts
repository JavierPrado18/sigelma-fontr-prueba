import { Component } from '@angular/core';
import { CustomFormComponent } from '../../components/custom-form/custom-form.component';

@Component({
  selector: 'app-marca',
  standalone: true,
  imports: [CustomFormComponent],
  templateUrl: './marca.component.html',
  styleUrl: './marca.component.css'
})
export class MarcaComponent {
title="Marca"
}
