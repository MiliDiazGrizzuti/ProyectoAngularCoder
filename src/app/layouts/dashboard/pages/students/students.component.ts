import { Component } from '@angular/core';
import { IStudent } from './models';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrl: './students.component.scss'
})
export class StudentsComponent {
  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'email', 'approved'];

  students: IStudent[] = [
    {
      id: 25452036,
      firstName: 'Rick',
      lastName: 'Grimes',
      email: 'rick.grimes@hotmail.com',
      age: 48,
      gender: 'Masculino',
      approved: true,
      createdAt: new Date()
    },
    {
      id: 22547841,
      firstName: 'Daryl',
      lastName: 'Dixon',
      email: 'daryl.dixon@hotmail.com',
      age: 52,
      gender: 'Masculino',
      approved: true,
      createdAt: new Date()
    },
    {
      id: 28158752,
      firstName: 'Michonne',
      lastName: 'Grimes',
      email: 'michonne.grimes@hotmail.com',
      age: 40,
      gender: 'Femenino',
      approved: false,
      createdAt: new Date()
    },
    {
      id: 31478365,
      firstName: 'Maggie',
      lastName: 'Greene',
      email: 'maggie.greene@hotmail.com',
      age: 38,
      gender: 'Femenino',
      approved: true,
      createdAt: new Date()
    },
    {
      id: 31578241,
      firstName: 'Glenn',
      lastName: 'Rhee',
      email: 'glenn.rhee@hotmail.com',
      age: 38,
      gender: 'Masculino',
      approved: false,
      createdAt: new Date()
    },
    {
      id: 24777895,
      firstName: 'Negan',
      lastName: 'Smith',
      email: 'negan.smith@hotmail.com',
      age: 46,
      gender: 'Masculino',
      approved: false,
      createdAt: new Date()
    },
  ];

}
