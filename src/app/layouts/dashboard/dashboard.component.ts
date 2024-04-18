import { Component, ViewChild } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StudentsComponent } from './pages/students/students.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})

export class DashboardComponent {
  @ViewChild(StudentsComponent) private studentsComponent!: StudentsComponent;
  
  showFiller = false;
  isFormOpen: boolean = false;

  constructor(private fb: FormBuilder) { }

  studentForm = this.fb.group({
    name: ['', [Validators.required]],
    lastname: ['', [Validators.required]],
    age: [''],
    nationality: [''],
    email: ['', [Validators.required, Validators.email]],
    mensaje: ['', [Validators.maxLength(500)]],
    role: ['user', [Validators.required]],
  });

  openForm() {
    this.isFormOpen = true;
  }

  closeForm() {
    this.isFormOpen = false;
  }

  get nameControl() {
    return this.studentForm.get('name');
  }

  get lastNameControl() {
    return this.studentForm.get('lastname');
  }

  get ageControl() {
    return this.studentForm.get('age');
  }

  get nationalityControl() {
    return this.studentForm.get('nationality');
  }

  get emailControl() {
    return this.studentForm.get('email');
  }

  get messageControl() {
    return this.studentForm.get('mensaje');
  }


  onSave() {
    if (this.studentForm.valid) {
      const formData = this.studentForm.value;
      this.studentsComponent.addStudent(formData);
      console.log(formData);
      this.closeForm(); // Cierra el formulario después de agregar el estudiante
    }
  }

  isMobile () : boolean {
    return window.innerWidth < 768;
  }

}