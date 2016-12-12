// permite importacion de modulos y componentes
import { NgModule } from '@angular/core';
// permite que codigo se ejecute en cualquier navegador
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './components/app.component';

// Decorador con objeto
@NgModule({
  // importando modulos que se necesitaran en la plataforma
  imports: [BrowserModule],
  // declaracion de todos los component generados
  declarations: [AppComponent],
  // para indicar que componente va a ser el principal en el proyecto
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
