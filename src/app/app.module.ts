import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { GoogleApiModule, NgGapiClientConfig, NG_GAPI_CONFIG, GoogleApiConfig} from "ng-gapi";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CorreoComponent } from './Components/correo/correo.component';
import { ListaCorreoComponent } from './Components/lista-correo/lista-correo.component';
import { NuevoCorreoComponent } from './Components/nuevo-correo/nuevo-correo.component';
import { AvisosComponent } from './Components/avisos/avisos.component';
import { CorreosRecibidosComponent } from './Views/correos-recibidos/correos-recibidos.component';
import { LoginComponent } from './Components/login/login.component';

let gapiClientConfig: NgGapiClientConfig = {
  client_id: "797611936415-g1ca2r4t8pu0o4a5fqi6qh1ftvhstt1b.apps.googleusercontent.com",
  discoveryDocs: ["https://analyticsreporting.googleapis.com/$discovery/rest?version=v4"],
  ux_mode: "popup",
  redirect_uri: "http://localhost:4200/loged",
  scope: [
    "https://www.googleapis.com/auth/userinfo.profile",
    "https://www.googleapis.com/auth/userinfo.email",
    "https://www.googleapis.com/auth/gmail.labels",
    "https://www.googleapis.com/auth/gmail.send",
    "https://www.googleapis.com/auth/gmail.readonly"
  ].join(" ")
};

@NgModule({
  declarations: [
    AppComponent,
    CorreoComponent,
    ListaCorreoComponent,
    NuevoCorreoComponent,
    AvisosComponent,
    CorreosRecibidosComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    GoogleApiModule.forRoot({
      provide: NG_GAPI_CONFIG,
      useValue: gapiClientConfig
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
