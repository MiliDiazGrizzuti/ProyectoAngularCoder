import { Component, OnInit } from '@angular/core';
import { CoursesService } from './courses.service';
import { ICourse } from './models';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent implements OnInit {
  displayedColumns = ['id', 'name', 'price', 'actions'];

  courses: ICourse[] = [];

  constructor(private coursesService: CoursesService) {}

  ngOnInit(): void {
    this.courses = this.coursesService.getCourses();
  }
}
