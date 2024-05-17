import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../../../../core/services/courses.service';
import { ICourse } from './models';
import { Observable, of, Subject, takeUntil, map } from 'rxjs';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})

export class CoursesComponent implements OnInit {

  courses: ICourse[] = [];

  isLoading = false;

  displayedColumns = ['id', 'name', 'price', 'actions'];

  courses$: Observable<ICourse[]> = of([]);
  private unsubscribe$ = new Subject<void>();
    
  constructor(
    private coursesService: CoursesService,
  ) {
  }
  ngOnInit(): void {
    this.isLoading = true;
    this.coursesService.getCourses()
      .pipe(
        map(courses => courses.map(course => ({ ...course, isNew: course.id % 2 === 0 }))),
        takeUntil(this.unsubscribe$)
      )
      .subscribe(transformedCourses => {
        this.courses$ = of(transformedCourses);
        this.isLoading = false;
      });
  }
  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }


}
