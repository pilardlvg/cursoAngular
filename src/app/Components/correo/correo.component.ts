import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-correo',
  templateUrl: './correo.component.html',
  styleUrls: ['./correo.component.scss']
})
export class CorreoComponent implements OnInit {
  correo: any;
  constructor() { 
    this.correo = {
      titulo: "Título del email",
      cuerpo: "Cuerpo del email, Cuerpo del email,Cuerpo del email, " +
      " Cuerpo del email,Cuerpo del email",
      emisor: "correo.emisor@nosecual.inv",
      destinatario: "correo.destinatario@yomisma.inv"
    }
  }

  ngOnInit(): void {
  }

}
