export interface Platillo {
  id: number;
  imagen: string;
  titulo: string;
  precio: number;
  cantidad: number;
  descripcion: string;
  tipo: 'desayuno' | 'comida' | 'cena';
}