import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatSidenavModule} from '@angular/material/sidenav';
import { ProveedorComponent } from './pages/proveedor/proveedor.component';
import { MarcaComponent } from './pages/marca/marca.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MatSidenavModule,ProveedorComponent
    ,MarcaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'sigelma-frontend';
}
