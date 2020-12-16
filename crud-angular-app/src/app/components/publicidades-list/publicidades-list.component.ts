import { Component, OnInit } from '@angular/core';
import { PublicidadService } from 'src/app/services/publicidad.service';

@Component({
  selector: 'app-publicidades-list',
  templateUrl: './publicidades-list.component.html',
  styleUrls: ['./publicidades-list.component.css']
})
export class PublicidadesListComponent implements OnInit {
  publicidades: any;
  publicidadActual = null;
  indiceActual = -1;
  title = '';

  constructor(private publicidadService: PublicidadService) { }

  ngOnInit(): void {
    this.buscarPublicidades();
  }

  buscarPublicidades(): void {
    this.publicidadService.getAll()
      .subscribe(
        data => {
          this.publicidades = data;
          console.log(data);
        },
        error => console.log(error)
      );
  }

  actualizarLista(): void {
    this.buscarPublicidades();
    this.publicidadActual = null;
    this.indiceActual = -1;
  }

  setPublicidadActiva(publicidad: any, index): void {
    this.publicidadActual = publicidad;
    this.indiceActual = index;
  }

  removeAllPublicidades(): void {
    this.publicidadService.deleteAll()
      .subscribe(res => {
        console.log(res);
        this.buscarPublicidades();
      },
      error => console.log(error)
      );
  }

  buscarTitulo(): void {
    this.publicidadService.findByTitle(this.title)
      .subscribe(
        data => {
          this.publicidades = data;
          console.log(data);
        },
        error => console.log(error)
      );
  }

}
