import { Injectable } from '@angular/core';
import { Platillo } from '../models/platillo.model';

@Injectable({
  providedIn: 'root'
})
export class AppStateService {
  private estado: { platillos: Platillo[] } = {
    platillos: []
  };

  agregarPlatillo(platillo: Platillo) {
    this.estado.platillos.push(platillo);
  }

  cambiarCantidad(id: number, cantidad: number) {
    const platillo = this.estado.platillos.find(p => p.id === id);
    if (platillo) {
      platillo.cantidad = cantidad;
    }
  }

  filtrarPlatillosPorTipo(tipo: 'desayuno' | 'comida' | 'cena'): Platillo[] {
    return this.estado.platillos.filter(platillo => platillo.tipo === tipo);
  }
}