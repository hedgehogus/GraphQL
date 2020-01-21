import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Observable } from 'rxjs';

import { Course } from '../types';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() searchTerm: String;

  courses: Observable<any>;

  constructor(private courseService: CourseService) { }

  ngOnInit() {
    this.courses = this.courseService.getAllCourses(this.searchTerm);
  }
  

}
