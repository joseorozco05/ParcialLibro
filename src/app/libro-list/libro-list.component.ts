import { Component, OnInit } from '@angular/core';
import { Libro } from '../models/libro';
import {LibroDataService} from '../service/libro-data.service';
import { from } from 'rxjs';


@Component({
  selector: 'app-libro-list',
  templateUrl: './libro-list.component.html',
  styleUrls: ['./libro-list.component.css']
})
export class LibroListComponent implements OnInit {

  libros: Libro[];
  constructor(private libroDataService: LibroDataService) { }

  ngOnInit() {
    this.getAll(); 
  }
 
  getAll() {
    this.libroDataService.getLibro().subscribe(libros => {
      return this.libros = libros;
    });
    }
}
