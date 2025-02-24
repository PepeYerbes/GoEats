import { Component } from '@angular/core';
import { Platillo } from '../models/platillo.model';
import { AppStateService } from '../services/app-state.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  nuevoPlatillo: Platillo = {
    id: 0,
    imagen: '',
    titulo: '',
    precio: 0,
    cantidad: 0,
    descripcion: '',
    tipo: 'desayuno'
  };

  constructor(private appStateService: AppStateService) {}

  agregarPlatillo() {
    this.appStateService.agregarPlatillo(this.nuevoPlatillo);
    this.cancelarCaptura();
  }

  cancelarCaptura() {
    this.nuevoPlatillo = {
      id: 0,
      imagen: '',
      titulo: '',
      precio: 0,
      cantidad: 0,
      descripcion: '',
      tipo: 'desayuno'
    };
  }
}