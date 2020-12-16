import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PublicidadService } from 'src/app/services/publicidad.service';

@Component({
  selector: 'app-publicidad-detail',
  templateUrl: './publicidad-detail.component.html',
  styleUrls: ['./publicidad-detail.component.css']
})
export class PublicidadDetailComponent implements OnInit {
  publicidadActual = null;
  mensaje = '';

  constructor(
    private publicidadService: PublicidadService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.mensaje = '';
    this.getPublicidad(this.route.snapshot.paramMap.get('id'));
  }

  getPublicidad(id: string): void {
    this.publicidadService.get(id)
      .subscribe(
        data => {
          this.publicidadActual = data;
          console.log(data);
        },
        error => console.log(error)
      );
  }

  updatePublicado(status: boolean): void {
    const data = {
      title: this.publicidadActual.title,
      description: this.publicidadActual.description,
      published: status
    };

    this.publicidadService.update(this.publicidadActual.id, data)
      .subscribe(
        response => {
          this.publicidadActual.published = status;
          console.log(response);
        },
        error => console.log(error)
      );
  }

  updatePublicidad(): void {
    this.publicidadService.update(this.publicidadActual.id, this.publicidadActual)
      .subscribe(
        response => {
          console.log(response);
          this.mensaje = 'La publicidad ha sido actualizada correctamente.';
        },
        error => console.log(error)
      );
  }

  deletePublicidad(): void {
    this.publicidadService.delete(this.publicidadActual.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/publicidades']);
        },
        error => console.log(error)
      );
  }

}
