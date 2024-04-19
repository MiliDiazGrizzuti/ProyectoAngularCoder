import { Injectable } from '@angular/core';
import { ICourse } from './models';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor() {}

  getCourses(): ICourse[] {
    return [
      {
        id: 1,
        name: 'Angular',
        price: 25
      },
      { 
        id: 2,
        name: 'React',
        price: 20
      },
      {
        id: 3,
        name: 'Vue',
        price: 15
      },
    ];
  }
}
