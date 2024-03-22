import { Component } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrl: './students.component.scss'
})
export class StudentsComponent {
  title = 'Cursos';

  students = [
    {
      name: 'Rick',
      dni: 25456789,
      age: 45,
      gender: 'Masculino',
      aprobado: true
    },
    {
      name: 'Daryl',
      dni: 18593579,
      age: 50,
      gender: 'Masculino',
      aprobado: false
    },
    {
      name: 'Michonne',
      dni: 28154685,
      age: 42,
      gender: 'Femenino',
      aprobado: true
    },
    {
      name: 'Maggie',
      dni: 31478365,
      age: 38,
      gender: 'Femenino',
      aprobado: true
    },
    {
      name: 'Glenn',
      dni: 31578241,
      age: 38,
      gender: 'Masculino',
      aprobado: false
    },
    {
    name: 'Negan',
    dni: 24777895,
    age: 46,
    gender: 'Masculino',
    aprobado: true
  }];

  mostrarListado = false;

}

