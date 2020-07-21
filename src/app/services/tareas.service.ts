import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TareaModel } from '../models/tarea.model';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class TareasService {

  private url = 'https://login-app-1ecae.firebaseio.com';

  constructor( private http: HttpClient ) { }


  crearTarea( tarea: TareaModel ) {

    return this.http.post(`${ this.url }/tareas.json`, tarea)
    .pipe(
        map( (resp: any) => {
          tarea.id = resp.name;
          return tarea;
        })
    );
  }

  actualizarTarea( tarea: TareaModel ) {

    const tareaTemp = {
      ...tarea
    };

    delete tareaTemp.id;

    return this.http.put(`${ this.url }/tareas/${ tarea.id }.json`, tareaTemp);

  }

  getTareas() {
    return this.http.get(`${ this.url }/tareas.json`)
    .pipe(
      map( this.crearArreglo )
    );

  }

  private crearArreglo( tareasObj: object ) {
    const tareas: TareaModel[] = [];
    console.log(tareasObj);
    if ( tareasObj === null ) { return []; }
    Object.keys( tareasObj ).forEach( key => {
        const tarea: TareaModel = tareasObj[key];
        tarea.id = key;
        tareas.push( tarea );
    });

    return tareas;
  }





}
