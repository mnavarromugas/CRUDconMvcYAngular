import { Component, OnInit } from '@angular/core';
import { PublicidadService } from 'src/app/services/publicidad.service';

@Component({
  selector: 'app-add-publicidad',
  templateUrl: './add-publicidad.component.html',
  styleUrls: ['./add-publicidad.component.css']
})
export class AddPublicidadComponent implements OnInit {
  publicidad = {
    title: '',
    description: '',
    publicado: false
  };
  submitted = false;

  constructor(private publicidadService: PublicidadService) { }

  ngOnInit(): void {
  }

  savePublicidad(): void {
    const data = {
      title: this.publicidad.title,
      description: this.publicidad.description
    };

    this.publicidadService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => console.log(error)
      );
  }

  newPublicidad(): void {
    this.submitted = false;
    this.publicidad = {
      title: '',
      description: '',
      publicado: false
    };
  }
}
