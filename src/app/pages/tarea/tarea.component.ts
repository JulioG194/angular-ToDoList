import { Component, OnInit } from '@angular/core';
import { TareaModel } from '../../models/tarea.model';
import { NgForm } from '@angular/forms';
import { TareasService } from '../../services/tareas.service';
// tslint:disable-next-line:import-spacing
import  Swal  from 'sweetalert2';
import { Title } from '@angular/platform-browser';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tarea',
  templateUrl: './tarea.component.html',
  styleUrls: ['./tarea.component.css']
})
export class TareaComponent implements OnInit {

  tarea: TareaModel = new TareaModel();

  constructor( private tareasService: TareasService  ) { }

  ngOnInit() {
  }

  guardar( form: NgForm ) {

      if ( form.invalid ) {
        console.log('Formulario no valido');
        return;
      }

      Swal.fire({
        allowOutsideClick: false,
        type: 'info',
        text: 'Guardando informacion...',
        title: 'Espere'
      });
      Swal.showLoading();

      let peticion: Observable<any>;

      if ( this.tarea.id  ) {
       peticion = this.tareasService.actualizarTarea( this.tarea );

      } else {
       peticion = this.tareasService.crearTarea( this.tarea );

      }

       // tslint:disable-next-line: align
       peticion.subscribe( resp => {
          Swal.fire({
          type: 'success',
          text: 'Se actualizo correctamente',
          title: this.tarea.nombre
                });
         });
  }


}
