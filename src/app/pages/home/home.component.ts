import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  proyectos = Array(500).fill(0);
  paises: any = [];


  constructor( private auth: AuthService,
               private router: Router,
               private http: HttpClient ) { }

  ngOnInit() {
    console.log(this.proyectos);
    this.http.get('https://restcountries.eu/rest/v2/lang/es')
    .subscribe( paises => this.paises = paises  );
  }

  drop(evento: CdkDragDrop<any> ) {

   // console.log('OK', evento);
   moveItemInArray( this.paises, evento.previousIndex, evento.currentIndex );
  }

  salir() {
    this.auth.logout();
    this.router.navigateByUrl('/login');

  }

  mostrar() {
    //this.auth.logout();
    this.router.navigateByUrl('/tareas');

  }


}
