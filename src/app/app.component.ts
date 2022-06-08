import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-full-stack-dev-u34';

  resultado = "";
  mensaje = "";


  calcular() {

    try {

      this.resultado = eval(this.resultado);

    } catch (error: any) {

      this.mensaje = "La expresión introducida no se puede evaluar, intentalo de nuevo pulsa el boton C";

    }

  }

  generarExpresion(id: string) {

    this.resultado += `${id}`;

  }

  limpiar() {

    this.resultado = "";
  }
}
