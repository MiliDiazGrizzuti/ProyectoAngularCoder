import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes-y-directivas',
  templateUrl: './pipes-y-directivas.component.html',
  styleUrl: './pipes-y-directivas.component.scss'
})
export class PipesYDirectivasComponent {

    items: string[] = ['Milagros', 'Antonela', 'Eloisa', 'Florencia', 'Belén', 'Juan Ignacio', 'Rodrigo']
    studentOrderAlphabetical: string = ''; // 'alphabetical' o ''
    studentOrderLength: string = ''; // 'length' o ''
  
    changeStudentOrderAlphabetical(order: string) {
      this.studentOrderAlphabetical = order;
    }
  
    changeStudentOrderLength(order: string) {
      this.studentOrderLength = order;
    }

}
