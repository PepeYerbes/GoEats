import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PlatilloService } from '../services/platillo.service';
import { Platillo } from '../models/platillo.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class MenuComponent {
  nuevoPlatillo: Platillo = {
    id: 0,
    imagen: '',
    titulo: '',
    precio: 0,
    cantidad: 0,
    descripcion: '',
    tipo: 'comida' 
   };

  platillos: Platillo[] = [];
  tipoSeleccionado: 'desayuno' | 'comida' | 'cena' = 'desayuno';
  imagenSeleccionada: string | ArrayBuffer | null = null;
  nombreArchivo: string = '';

  constructor(private platilloService: PlatilloService) {
    this.platilloService.getPlatillos().subscribe(platillos => {
      this.platillos = platillos;
    });
  }

  agregarPlatillo() {
    console.log('Intentando agregar platillo:', this.nuevoPlatillo);
    if (this.validarPlatillo(this.nuevoPlatillo)) {
      this.nuevoPlatillo.id = Date.now();
      console.log('Platillo válido, agregando:', this.nuevoPlatillo);
      this.platilloService.addPlatillo({ ...this.nuevoPlatillo });
      console.log('Platillo agregado:', this.nuevoPlatillo);
      this.limpiarFormulario();
    } else {
      console.log('Platillo no válido:', this.nuevoPlatillo);
      alert('Por favor, complete todos los campos requeridos.');
    }
  }

  validarPlatillo(platillo: Platillo): boolean {
    return platillo.titulo.trim() !== '' &&
           platillo.precio > 0 &&
           platillo.cantidad > 0 &&
           platillo.descripcion.trim() !== '' &&
           platillo.imagen.trim() !== '';
  }

  limpiarFormulario() {
    this.nuevoPlatillo = {
      id: 0,
      imagen: '',
      titulo: '',
      precio: 0,
      cantidad: 0,
      descripcion: '',
      tipo: 'desayuno'
    };
    this.imagenSeleccionada = null;
    this.nombreArchivo = '';
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const file = input.files[0];
      this.nombreArchivo = file.name;
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.imagenSeleccionada = e.target.result;
        this.nuevoPlatillo.imagen = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }

  cambiarTipo(tipo: 'desayuno' | 'comida' | 'cena') {
    this.tipoSeleccionado = tipo;
  }

  actualizarCantidad(platillo: Platillo, event: Event) {
    const inputElement = event.target as HTMLInputElement;
    platillo.cantidad = parseInt(inputElement.value, 10);
    this.platilloService.updatePlatillo(platillo);
  }
}