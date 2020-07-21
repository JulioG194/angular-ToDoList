import { Component, OnInit } from '@angular/core';
import { TareasService } from '../../services/tareas.service';
import { TareaModel } from '../../models/tarea.model';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit {

  tareas: TareaModel[] = [];

  constructor( private tareasService: TareasService ) { }

  ngOnInit() {

    this.tareasService.getTareas()
    .subscribe( resp => {
      console.log(resp);
      this.tareas = resp;
    });
  }

}
