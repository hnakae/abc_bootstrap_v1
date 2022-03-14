import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  courses: { id: number; title: string; description: string; video: string; }[] | undefined;
  selectedCourse: any;

  url: string = "https://www.youtube.com/embed/5AYmaMKdbdM";
  urlSafe: SafeResourceUrl | undefined;

  constructor(public dataService: DataService, public sanitizer: DomSanitizer) { 
    // this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
    this.urlSafe = this.safeUrl(this.url);
  }

  ngOnInit() {
    this.courses = this.dataService.getCourses();  
    // this.urlSafe= this.sanitizer.bypassSecurityTrustResourceUrl(this.url);  
    // console.log("urlSafe: "+this.urlSafe);
    // console.log("returned: "+ this.urlSafe);
  }
  public selectCourse(course: any){
    this.selectedCourse = course;
  }

  public safeUrl(url: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    
    // return this.sanitizer.sanitize(SecurityContext.URL, url);
  }

}


  // constructor(public sanitizer: DomSanitizer) { }

  // ngOnInit() {
  //   this.urlSafe= this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
  //   // this.urlSafe= this.e_sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/5AYmaMKdbdM');
  // }