import { Component, ViewChild } from '@angular/core';
import { FormControl, FormBuilder, Validators } from '@angular/forms';
import { StudentsComponent } from './pages/students/students.component';
import { Observable } from 'rxjs';
import { IStudent } from './pages/students/models';
import { AuthService } from './pages/students/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})

export class DashboardComponent {
  @ViewChild(StudentsComponent) private studentsComponent!: StudentsComponent;
  
  showFiller = false;
  isFormOpen: boolean = false;

  authUser$: Observable<IStudent | null>;

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.authUser$ = this.authService.authUser$;
  }

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

  login(): void {
    this.authService.login();
  }

  logout(): void {
    this.authService.logout();
  }

  isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }

}