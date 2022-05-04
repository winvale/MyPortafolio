import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Portafolio-Edwin-Valencia';
  imagenes = [
    {
      imagenSrc:'assets/img/certificados/CertificadoJavaScri.PNG',
      imagenAlt:'1',
    },
    {
      imagenSrc: 'assets/img/certificados/CertificacionEnResponsive.PNG',
      imagenAlt: '2',
    },
    {
      imagenSrc: 'assets/img/certificados/Certificateingles.PNG',
      imagenAlt: '3',
    },
    {
      imagenSrc: 'assets/img/certificados/certificadoContablidad.PNG',
      imagenAlt: '4',
    },
    {
      imagenSrc: 'assets/img/certificados/Certificateprofuturo.PNG',
      imagenAlt: '5',
    },
  ]
}
