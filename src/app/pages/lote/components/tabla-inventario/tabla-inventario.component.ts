import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

export interface Product {
  id: number;
  producto: string;
  categoria: string;
  marca: string;
  proveedor: string;
  actividad: string;
}

const PRODUCTS_DATA: Product[] = [
  { id: 1, producto: 'Fierros', categoria: 'Materiales de construcción', marca: 'Aceros Arequipa', proveedor: 'Constructora ABC', actividad: 'Construcción de estructuras' },
  { id: 2, producto: 'Madera', categoria: 'Materiales de construcción', marca: 'Madera Ecológica', proveedor: 'Forestal Perú', actividad: 'Construcción de encofrados' },
  { id: 3, producto: 'Cemento', categoria: 'Materiales de construcción', marca: 'Cemento Sol', proveedor: 'Cementera Nacional', actividad: 'Construcción de cimientos' },
  { id: 4, producto: 'Calamina', categoria: 'Materiales de construcción', marca: 'Aceros Arequipa', proveedor: 'Constructora ABC', actividad: 'Construcción de techos' },
  { id: 5, producto: 'Teja', categoria: 'Materiales de construcción', marca: 'Tejas Andinas', proveedor: 'Cerámica Perú', actividad: 'Construcción de techos' },
  { id: 6, producto: 'Arena', categoria: 'Materiales de construcción', marca: 'Arena del Sur', proveedor: 'Minería del Sur', actividad: 'Construcción de cimientos' },
  { id: 7, producto: 'Carretillas', categoria: 'Herramientas de construcción', marca: 'Truper', proveedor: 'Ferretería Nacional', actividad: 'Movimientos de tierra' },
  { id: 8, producto: 'Barriles', categoria: 'Herramientas de construcción', marca: 'Plastifor', proveedor: 'Plásticos del Perú', actividad: 'Almacenamiento de materiales' },
  { id: 9, producto: 'Cascos', categoria: 'Equipos de seguridad', marca: '3M', proveedor: 'Equipos de Seguridad S.A.', actividad: 'Protección de trabajadores' },
  { id: 10, producto: 'Winchas', categoria: 'Herramientas de construcción', marca: 'Black & Decker', proveedor: 'Ferretería Nacional', actividad: 'Levantamiento de cargas' },
];

@Component({
  selector: 'lote-tabla-inventario',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './tabla-inventario.component.html',
  styleUrl: './tabla-inventario.component.css'
})
export class TablaInventarioComponent {
  displayedColumns: string[] = ['id', 'producto', 'categoria', 'marca', 'proveedor', 'actividad'];
  dataSource = PRODUCTS_DATA;
}
