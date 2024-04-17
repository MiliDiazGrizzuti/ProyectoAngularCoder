import { Component, Output, EventEmitter } from '@angular/core';
import { IStudent, UserRole } from './models';
import { ChangeDetectorRef } from '@angular/core';
import { StudentOrderPipe } from '../../../../shared/pipes-y-directivas/student-order.pipe';


@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrl: './students.component.scss'
})

export class StudentsComponent {

  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'email', 'role', 'approved', 'actions'];

  students: IStudent[] = [
    {
      id: 25452036,
      firstName: 'Rick',
      lastName: 'Grimes',
      email: 'rick.grimes@hotmail.com',
      age: 48,
      gender: 'Masculino',
      approved: true,
      role: 'admin',
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
      role: 'admin',
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
      role: 'user',
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
      role: 'user',
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
      role: 'user',
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
      role: 'user',
      createdAt: new Date()
    },
  ];

  @Output() openFormEvent = new EventEmitter<void>();

  constructor(private cdr: ChangeDetectorRef) { }

  userRoleSession: UserRole = 'admin'; //si le cambio a user, no se va a ver el botón de eliminar

  addStudent(formData: any) {
    const newStudent: IStudent = {
      id: Math.floor(Math.random() * 100000), // genera un ID aleatorio
      firstName: formData.name,
      lastName: formData.lastname,
      email: formData.email,
      age: formData.age,
      gender: formData.gender,
      approved: false, // por default, el nuevo estudiante no está aprobado
      role: formData.role as UserRole,
      createdAt: new Date()
    };

    this.students = [...this.students, newStudent];  // agrega el nuevo estudiante a la tabla
    this.cdr.detectChanges(); // lo tuve que buscar porque no mostraba al nuevo registro en la tabla
    console.log(this.students);
  }

  onDeleteStudent(id: number): void {
    if (confirm('¿Está seguro que desea eliminar este estudiante?')) {
    this.students = this.students.filter(student => student.id !== id);
    }
  }

  openForm() {
    this.openFormEvent.emit();
  }

}