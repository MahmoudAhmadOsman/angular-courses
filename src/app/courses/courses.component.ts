import { Component, OnInit } from '@angular/core';
import * as data from './data.json';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  title = 'All Courses';
  //Now create a variable that holds the data from the json file
  courses: any = (data as any).default;
  constructor() {}

  ngOnInit(): void {
    console.log(data);
  }
}
