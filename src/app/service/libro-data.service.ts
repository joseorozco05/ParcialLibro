import { Injectable } from '@angular/core';
import {Libro} from '../models/libro';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class LibroDataService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  private libroUrl = 'api/libros';

  constructor(private http: HttpClient) { }

  add (libro:Libro): Observable<Libro> {
      return this.http.post<Libro>(this.libroUrl, libro,  this.httpOptions).pipe(
        tap((newLibro: Libro) => this.log(`Se registro la informacion con el id=${newLibro.id}`)),
        catchError(this.handleError<Libro>('addLibro'))
        );
  }

  searchLibro(id: number): Observable<Libro> {
    if (!id) {
      // if not search term, return empty hero array.
      return of();
    }
    return this.http.get<Libro>(`${this.libroUrl}/${id}`).pipe(
      tap(_ => this.log(`Se encontro el libro ${id}`)),
      catchError(this.handleError<Libro>(`searchLibro id=${id}`))
    );
  }

  getLibro(): Observable<Libro[]> {
    return this.http.get<Libro[]>(this.libroUrl).pipe(
      tap(libros => {
        return this.log('Consulta de Libros');
      }),
      catchError(this.handleError<Libro[]>('getLibro', [])));
  }
  
  deleteLibro(libro: Libro | number): Observable<Libro> {
    const id = typeof libro === 'number' ? libro : libro.id;
    const url = `${this.libroUrl}/${id}`;
  
    return this.http.delete<Libro>(url, this.httpOptions).pipe(
      tap(_ => this.log(`Se eliminó el Libro con id=${id}`)),
      catchError(this.handleError<Libro>('deleteLibro'))
    );
  }

  updateTask(libro: Libro): Observable<any> {
    return this.http.put(this.libroUrl, libro, this.httpOptions).pipe(
      tap(_ => this.log(`Se actualizo el libro con id=${libro.id}`)),
      catchError(this.handleError<any>('updateLibro'))
    );
  }

  private log(message: string) {
    
    alert(`libroService: ${message}`);
   }
   
   private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); 
      this.log(`${operation} Fallo: ${error.message}`);
      return of(result as T);
    };
  }
}
