import { Component, OnInit } from '@angular/core';
import { Platillo } from '../models/platillo.model';
import { AppStateService } from '../services/app-state.service';

@Component({
  selector: 'app-visual',
  templateUrl: './visual.component.html',
  styleUrls: ['./visual.component.css']
})
export class VisualComponent implements OnInit {
  platillos: Platillo[] = [];
  tipoSeleccionado: 'desayuno' | 'comida' | 'cena' = 'desayuno';

  constructor(private appStateService: AppStateService) {}

  ngOnInit() {
    this.filtrarPlatillos();
  }

  filtrarPlatillos() {
    this.platillos = this.appStateService.filtrarPlatillosPorTipo(this.tipoSeleccionado);
  }

  cambiarCantidad(id: number, cantidad: number) {
    this.appStateService.cambiarCantidad(id, cantidad);
    this.filtrarPlatillos();
  }
}