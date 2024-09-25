import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Movie {
  title: string;
  releaseDate: string;
  description: string;
  posterUrl: string;
  link: string;
}

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent {
  movies: Movie[] = [
    {
      title: 'Los Thunderbolts llegan al UCM de Marvel: Fecha de estreno, tráiler, reparto.',
      releaseDate: '23/9/2024',
      description: 'La huelga de guionistas y actores de Hollywood paralizó un rodaje que, tras el acuerdo, se reanuda con un retraso en la fecha de estreno.',
      posterUrl: 'https://www.lavanguardia.com/andro4all/hero/2024/09/thunderbolts.jpg?width=768&aspect_ratio=16:9&format=nowebp',
      link: 'https://www.fotogramas.es/noticias-cine/a41166450/thunderbolts-marvel-fecha-estreno-reparto-sinopsis-trailer/'
    },
    {
      title: 'Todo sobre Gladiator 2, la esperada secuela de Ridley Scott con Paul Mescal y Pedro Pascal',
      releaseDate: '23/9/2024',
      description: 'Connie Nielsen regresa y se une a Paul Mescal, Denzel Washington, Joseph Quinn y Pedro Pascal... El reparto de Gladiator 2 es una locura.',
      posterUrl: 'https://i.blogs.es/fbba0e/gladiator-2-escena/1366_2000.jpeg',
      link: 'https://www.fotogramas.es/noticias-cine/a42471230/gladiator-2-fecha-estreno-sinopsis-trailer-reparto/'
    },
    {
      title: 'La adictiva serie de solo 8 episodios en Netflix de un director ganador de 3 Premios Oscar que mezcla intriga y fantasía',
      releaseDate: '23/9/2024',
      description: 'De lo macabro a lo mágico y de lo gótico a lo grotesco, estas 8 mini-películas seleccionadas por Guillermo del Toro para Netflix te harán estremecerte.',
      posterUrl: 'https://hips.hearstapps.com/hmg-prod/images/el-gabinete-de-curiosidades-de-guillermo-del-toro-netflix-serie-66f153c4c2fa2.jpg?crop=1xw:1xh;center,top&resize=1200:*',
      link: 'https://www.fotogramas.es/series-tv-noticias/a62294515/el-gabinete-de-curiosidades-de-guillermo-del-toro-serie-netflix/'
    },
    {
      title: 'Está en Prime Video y es una de las películas de ciencia ficción más entretenidas y trepidantes de la historia del cine',
      releaseDate: '23/9/2024',
      description: 'Paul Verhoeven que estás en la tierra, santificado sea tu nombre.',
      posterUrl: 'https://hips.hearstapps.com/hmg-prod/images/desafio-total-pelicula-prime-video-66f007093fb80.jpg?crop=1xw:1xh;center,top&resize=1200:*',
      link: 'https://www.fotogramas.es/noticias-cine/a62319276/desafio-total-pelicula-prime-video-ciencia-ficcion-arnold-schwarzenegger/'
    },
    {
      title: '1.500 críticos de cine eligen la mejor película bélica de la historia y no es Salvar al soldado Ryan: está en Prime Video y la nominaron a 8 Oscars',
      releaseDate: '12/9/2024',
      description: 'La película dirigida por Francis Ford Coppola ha sido seleccionada como la mejor película bélica de todos los tiempos en la lista realizada por el British Film Institute.',
      posterUrl: 'https://hips.hearstapps.com/hmg-prod/images/salvar-al-soldado-ryan-66e2d2c305a71.jpg?crop=1xw:1xh;center,top&resize=1200:*',
      link: 'https://www.fotogramas.es/noticias-cine/a62151417/mejor-pelicula-belica-historia-cine-bfi-apocalypse-now/'
    },
    {
      title: '"Fascinante": Es una de las mejores series de la historia de Netflix, sus episodios duran solo 10 minutos y es visualmente espectacular',
      releaseDate: '9/9/2024',
      description: 'Más que una serie, una colección de 35 relatos independientes de la ciencia ficción más distópica y alucinante bajo el amparo de David Fincher.',
      posterUrl: 'https://hips.hearstapps.com/hmg-prod/images/love-death-robots-serie-netflix-66e1b0c8b7fa6.jpg?crop=1xw:1xh;center,top&resize=1200:*',
      link: 'https://www.fotogramas.es/series-tv-noticias/a62151623/love-death-robots-serie-netflix-animacion/'
    },

  ];
}
