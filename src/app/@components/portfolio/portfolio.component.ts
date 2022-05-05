import { Component, OnInit } from '@angular/core';
import { IModal } from '@widgets/modal/modal.interface';

const description = `
                      Descripcion del producto muy pronto.`;
@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  items: Array<IModal> = [];
  ngOnInit() {
    this.items.push ({
      title: 'Log cabin',
      image: 'assets/img/portfolio/iconoParaProyectos.png',
      description
    });
    this.items.push ({
      title: 'Tasty Cake',
      image: 'assets/img/portfolio/iconoParaProyectos.png',
      description
    });
    this.items.push ({
      title: 'Circus',
      image: 'assets/img/portfolio/iconoParaProyectos.png',
      description
    });
    this.items.push ({
      title: 'Game Game',
      image: 'assets/img/portfolio/iconoParaProyectos.png',
      description
    });
    this.items.push ({
      title: 'Log Safe',
      image: 'assets/img/portfolio/iconoParaProyectos.png',
      description
    });
    this.items.push ({
      title: 'Yellow submarine',
      image: 'assets/img/portfolio/iconoParaProyectos.png',
      description
    });
  }

}
