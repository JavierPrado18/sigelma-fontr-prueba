import { Component } from '@angular/core';
import { FormProveedorComponent } from './components/form-proveedor/form-proveedor.component';

@Component({
  selector: 'app-proveedor',
  standalone: true,
  imports: [FormProveedorComponent],
  templateUrl: './proveedor.component.html',
  styleUrl: './proveedor.component.css'
})
export class ProveedorComponent {

}
