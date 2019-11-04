import { Component, OnInit } from '@angular/core';
import {LibroDataService} from '../service/libro-data.service';
import { from } from 'rxjs';
import { Alert } from 'selenium-webdriver';
import { Libro } from '../models/libro';



@Component({
  selector: 'app-libro-add',
  templateUrl: './libro-add.component.html',
  styleUrls: ['./libro-add.component.css']
})
export class LibroAddComponent implements OnInit {

  libro: Libro;
  libros:Libro[];

  constructor( private libroDataService:LibroDataService) { }

  ngOnInit() {
    this.libro = new Libro();
  }
  add(): void{
    if (!this.libro) { return; }
    this.libroDataService.add(this.libro)
      .subscribe( libro  => {
          alert('Se agrego un Nuevo Libro =>'+libro.id);
             });
  }
}
