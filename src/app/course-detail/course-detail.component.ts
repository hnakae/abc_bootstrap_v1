import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { DataService } from '../data.service';
import { Course } from '../course';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {

  @Input() course?: Course;
  // courses: { id: number; title: string; description: string; video: string; }[] | undefined;
  selectedCourse: any;

  url: string = "https://www.youtube.com/embed/5AYmaMKdbdM";
  urlSafe: SafeResourceUrl | undefined;
  
  constructor(public dataService: DataService, public sanitizer: DomSanitizer) {
    this.urlSafe = this.safeUrl(this.url);
   }

  ngOnInit(): void {
  }

  public safeUrl(url: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    
    // return this.sanitizer.sanitize(SecurityContext.URL, url);
  }

  public selectCourse(course: any){
    this.selectedCourse = course;
  }

}
