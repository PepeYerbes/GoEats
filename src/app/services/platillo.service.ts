import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Platillo } from '../models/platillo.model';

@Injectable({
  providedIn: 'root'
})
export class PlatilloService {
  private platillos: Platillo[] = [];
  private platillosSubject = new BehaviorSubject<Platillo[]>(this.platillos);

  getPlatillos() {
    return this.platillosSubject.asObservable();
  }

  addPlatillo(platillo: Platillo) {
    console.log('Agregando platillo en el servicio:', platillo);
    this.platillos.push(platillo);
    this.platillosSubject.next(this.platillos);
    console.log('Platillos actuales:', this.platillos);
  }

  updatePlatillo(updatedPlatillo: Platillo) {
    const index = this.platillos.findIndex(p => p.id === updatedPlatillo.id);
    if (index !== -1) {
      this.platillos[index] = updatedPlatillo;
      this.platillosSubject.next(this.platillos);
    }
  }
}