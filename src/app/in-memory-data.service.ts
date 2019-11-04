import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Libro } from './models/libro';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements  InMemoryDbService{

  createDb() {
    const libros = [
      {id :null, nombre: 'Analisis de Requerimiento', numsilla: 'Se requiere visualizar...', tiposilla: true},
      {id: null, nombre: 'Diseño de la arquitectura', numsilla: 'Se requiere visualizar diseño...', tiposilla: true}
    ];

    return {libros};
  }
  genId(libros: Libro[]): number {
    return libros.length > 0 ? Math.max(...libros.map(Libro => Libro.id)) + 1 : 11;
  }

}
