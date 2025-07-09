import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { alumnos } from './mock';
import { Alumno } from '../../models/alumnoTO';

@Component({
  selector: 'app-tabla-alumnos',
  imports: [CommonModule],
  templateUrl: './tabla-alumnos.html',
  styleUrl: './tabla-alumnos.css'
})
export class TablaAlumnos implements OnInit {
  public alumnos?: Alumno[];
  
  ngOnInit(): void {
    this.alumnos = alumnos;
  }
}
