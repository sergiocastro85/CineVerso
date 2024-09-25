import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HttpClientModule ,CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  API_KEY = 'd225d5fe07fbbd7f9a727dfa38d40b41';
  pagina = 1;
  peliculas: any[] = [];
  totalPages: number = 1;
  loading = false;
  peliculaSeleccionada: any = null;
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.cargarPeliculas();
  }

  cargarPeliculas() {
    this.loading = true;
    this.http.get(`https://api.themoviedb.org/3/movie/popular?api_key=${this.API_KEY}&language=es-MXS&page=${this.pagina}`)
      .subscribe((response: any) => {
        this.peliculas = response.results;
        this.totalPages = response.total_pages;
        this.loading = false;
      }, error => {
        this.manejarErrores(error.status);
        this.loading = false;
      });
  }

  getPosterUrl(posterPath: string) {
    return `http://image.tmdb.org/t/p/w500/${posterPath}`;
  }

  anteriorPagina() {
    if (this.pagina > 1) {
      this.pagina--;
      this.cargarPeliculas();
    }
  }

  siguientePagina() {
    if (this.pagina < this.totalPages) {
      this.pagina++;
      this.cargarPeliculas();
    }
  }

  // Método para abrir el modal
  abrirModal(pelicula: any) {
    this.peliculaSeleccionada = pelicula;
  }

  // Método para cerrar el modal
  cerrarModal() {
    this.peliculaSeleccionada = null;
  }

  manejarErrores(status: number) {
    let mensaje = '';
    switch (status) {
      case 401:
        mensaje = 'No se ha iniciado sesión';
        break;
      case 403:
        mensaje = 'Acceso denegado';
        break;
      case 404:
        mensaje = 'Página no encontrada';
        break;
      default:
        mensaje = 'Error inesperado';
        break;
    }
    console.error(mensaje);
  }
}
