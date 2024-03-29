import { Component, OnInit } from '@angular/core';
import { Course } from '../course';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  courses: Course[] = [];

  constructor(private courseService: CourseService) { }

  getCourses(): void {
   this.courseService.getCoursesInProgress().subscribe(
      courses => this.courses = courses
   );
  }

  ngOnInit(): void {
    this.getCourses();
  }

  delete(course: Course): void {
    this.courses = this.courses.filter(c => c !== course);
    this.courseService.deleteCourseInProgress(course.id).subscribe();
  }

}
