import { Component } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrl: './students.component.scss'
})
export class StudentsComponent {
  title = 'Cursos';

  hasError = false;

  isDisabled = true;

  students = ['Rick', 'Daryl', 'Michonne', 'Maggie', 'Glenn'];

  example = [
    {
      name: 'Rick',
      aprobado: true
    },
    {
      name: 'Daryl',
      aprobado: false
    },
    {
      name: 'Michonne',
      aprobado: true
    },
    {
      name: 'Maggie',
      aprobado: true
    },
    {
      name: 'Glenn',
      aprobado: false
    }]

  mostrarListado = false;

  birthdayStudents = new Date(1995, 5, 28);

  alternarError () {
    this.hasError = !this.hasError;
  }


}

