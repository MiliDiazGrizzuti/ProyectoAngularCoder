import { Pipe, PipeTransform } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Pipe({
  name: 'validator'
})
export class ValidatorPipe implements PipeTransform {

  transform(value: ValidationErrors | undefined | null,  ...args: unknown[]): unknown {
    console.log(value);

    if (value) {
      let messages: string[] = [];

      for (const key in value) {
        if (Object.prototype.hasOwnProperty.call(value, key)) {
          const element = value[key];

          if (key === 'required') messages.push('*Este campo es requerido');
          if (key === 'email') messages.push('*El formato no es válido');
          if (key === 'maxlength') messages.push('*Haz alcanzado el máximo de caracteres (500)');
  
        }
      }
    
      return messages.join(', ');
  }
  
  return null;
  }
}
