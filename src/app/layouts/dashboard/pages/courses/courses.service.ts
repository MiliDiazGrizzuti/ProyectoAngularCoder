import { Injectable } from '@angular/core';
import { ICourse } from './models';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class CoursesService {

  constructor() {}

  getCourses(): Observable<ICourse[]> {
    return new Observable<ICourse[]>(observer => {
      observer.next([
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
      ]);
      observer.complete();
    });
  }
  
}
