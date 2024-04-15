import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})

export class DashboardComponent {
  showFiller = false;

  isFormOpen: boolean = false;

  constructor(private fb: FormBuilder) { }

  studentForm = this.fb.group({
    name: ['', [Validators.required]],
    lastname: ['', [Validators.required]],
    age: [''],
    nationality: [''],
    email: ['', [Validators.required, Validators.email]],
    mensaje: ['', [Validators.required, Validators.maxLength(500)]]
  });

  openForm() {
    this.isFormOpen = true;
  }

  closeForm() {
    this.isFormOpen = false;
  }

  submit() {
    if (this.studentForm.valid) {
      console.log('Formulario válido. Enviar datos...');
      this.closeForm();
    } else {
      console.log('Formulario inválido. Por favor, revise los campos.');
    }
  }

  isMobile () : boolean {
    return window.innerWidth < 768;
  }

}