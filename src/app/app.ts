import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TablaAlumnos } from "./components/tabla-alumnos/tabla-alumnos";
import { TablaCurso } from "./components/tabla-curso/tabla-curso";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TablaAlumnos, TablaCurso, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  cursos: boolean = true;

  handleCambio() {
    this.cursos = !this.cursos;
  }

  protected title = 'Lista-cursos';
}
