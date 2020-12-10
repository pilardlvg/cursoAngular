import { Component, OnInit } from '@angular/core';
import { GmailService } from 'src/app/Services/gmail.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-correo',
  templateUrl: './lista-correo.component.html',
  styleUrls: ['./lista-correo.component.scss']
})
export class ListaCorreoComponent implements OnInit {
  correos: any[] ;

  constructor(private gmail: GmailService, private router: Router) { 
    /* const correo1 = {
      titulo: "Titulo del 1",
      cuerpo: `Cuerpo del Email, Cuerpo del Email, Cuerpo del Email, Cuerpo del Email, Cuerpo del Email, Cuerpo del Email
        Cuerpo del Email, Cuerpo del Email, Cuerpo del Email, Cuerpo del Email, Cuerpo del Email, Cuerpo del Email, Cuerpo del Email,
        Cuerpo del Email, Cuerpo del Email, Cuerpo del Email, Cuerpo del Email, Cuerpo del Email, Cuerpo del Email, Cuerpo del Email`,
      emisor: 'correoEmisor1@openWebinar.inv',
      destinatario: 'correoReceptor@openWebinar.inv',
      leido: true
    }; */

    this.correos = [];
    /* this.correos.push(correo1); */
  }

  ngOnInit(): void {
    this.getRecibidos();
  }

  clickResponder(correo: any) {
    // this.responder = !this.responder;
    // this.correoAResponder = correo;
    correo.responder = !correo.responder;
  }

  getRecibidos() {
    this.gmail.getRecibidos().subscribe(
      (response) => {
        const mensajes = response.messages;
        mensajes.forEach(element => {
          this.getMensaje(element.id);
        });
      },
      (error) => this.error(error),
    );
  }

  error(error){
    console.warn("ERROR");
  }

  getMensaje(id: string){
    this.gmail.getMessage(id).subscribe(
      (response) => {
        const emisor = response.payload.headers.find(e => e.name === "From");
        const subject = response.payload.headers.find(e => e.name === "Subject");

        const mensage = {
          id: response.id,
          cuerpo: response.snippet,
          emisor: emisor? emisor.value : undefined,
          titulo: subject? subject.value : undefined,
        };
        this.correos.push(mensage);
      },
      (error) => this.error(error)
    );
  }

  accionRespuestaRapida(correo) {
    correo.responder = false ;
  }

  verDetalle(correo){
    this.router.navigate(['/mail', {correo: JSON.stringify(correo)}]);
  }
}
