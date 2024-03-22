import { Component } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrl: './tool-bar.component.scss'
})
export class ToolBarComponent {

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

}
