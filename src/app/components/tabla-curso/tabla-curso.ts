import { Component, OnInit } from '@angular/core';
import { cursos } from './mock';
import { CommonModule } from '@angular/common';
import { Curso } from '../../models/cursoTO';

@Component({
  selector: 'app-tabla-curso',
  imports: [CommonModule],
  templateUrl: './tabla-curso.html',
  styleUrl: './tabla-curso.css'
})
export class TablaCurso implements OnInit{
  public cursos? : Curso[];

  ngOnInit(): void {
    this.cursos = cursos;
  }


}
