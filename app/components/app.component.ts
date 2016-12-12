import { Component } from '@angular/core';

// Decorador con objeto

/*
 * El decorador de componente me permite extender atributos de la clase que estoy generando
 * es decir el componente a traves del objeto va a extender los atributos que existen en la
 * clase AppComponent. Va a generar un selector y un template ligado directamente a esta clase
 */
@Component({
  selector: 'my-app', // tag de angular 1.x para iniciar el component
  template:
  `
    <h1>Hola {{ name }}</h1>
  `
})

// exportando clase con el nombre que queramos
export class AppComponent  { name = "Angular 2"}
