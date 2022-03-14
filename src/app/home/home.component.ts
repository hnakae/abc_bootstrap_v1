import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  courses: { id: number; title: string; description: string; video: string; }[] | undefined;
  selectedCourse: any;
  constructor(public dataService: DataService) { }

  ngOnInit() {
    this.courses = this.dataService.getCourses();  
    // this.urlSafe= this.sanitizer.bypassSecurityTrustResourceUrl(this.url);  
    // console.log("urlSafe: "+this.urlSafe);
    // console.log("returned: "+ this.urlSafe);
  }
  public selectCourse(course: any){
    this.selectedCourse = course;
  }

}
