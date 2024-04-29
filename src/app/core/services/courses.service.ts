import { Injectable } from '@angular/core';
import { ICourse } from '../../layouts/dashboard/pages/courses/models';
import { BehaviorSubject, Observable, of } from 'rxjs';

// let COURSES_DB: ICourse[] = [
//   {
//       id: 1,
//       name: 'Angular',
//       price: 100
//   },
//   {
//     id: 2,
//     name: 'React',
//     price: 20
//   },
//   {
//     id: 3,
//     name: 'Vue',
//     price: 15
//   },
// ]

@Injectable({
  providedIn: 'root'
})

export class CoursesService {

  constructor() {}
  
  // getCourse(): Observable<ICourse[]> {
  //   return of(COURSES_DB);
  // }

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

  // createCourse(data: ICourse) {
  //   COURSES_DB.push(data);
  //   return of(COURSES_DB);
  // }

  // deleteCourse(id: number) {
  //     return of(COURSES_DB.filter((course) => course.id != id));
  // }

  // updateCourse(id:number, data: ICourse) {
  //     return of(COURSES_DB.map((course) => course.id === id ? {...course, ...data} : course));
  // }
  
}
