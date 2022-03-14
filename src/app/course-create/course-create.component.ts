import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-course-create',
  templateUrl: './course-create.component.html',
  styleUrls: ['./course-create.component.css']
})
export class CourseCreateComponent implements OnInit {

  course : {id: any, title: any, description: any, video: any} = {id: null, title: "", description: "", video: ""};

  constructor(public dataService: DataService) { }

  ngOnInit() {
  }

  createCourse(){
    console.log(this.course);
    this.dataService.createCourse(this.course);
    this.course = {id: null, title: "", description: "", video: ""};

  }
}
