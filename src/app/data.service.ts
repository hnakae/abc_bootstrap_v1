import { Injectable, SecurityContext } from '@angular/core';
// import { ɵ_sanitizeUrl } from '@angular/core';
// import { ɵbypassSanitizationTrustResourceUrl } from '@angular/core';
import { Course } from './course';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  courses = [
    {id: 1, title: "Contact 001", description: "Contact 001 des", video: "https://www.youtube.com/embed/5AYmaMKdbdM"},
    {id: 2, title: "Contact 002", description: "Physical", video: "https://www.youtube.com/embed/OlyP_aeYjFI"},
    {id: 3, title: "Contact 003", description: "Easier", video: "https://www.youtube.com/embed/_Ip-gVchf18"},
    {id: 4, title: "Contact 004", description: "Technician", video: "https://www.youtube.com/embed/PpJx-S7uDn8"}
  ];
  // urlSafe: string = "";
  // e_sanitizer: string ="";
  // url: string = "https://www.youtube.com/embed/5AYmaMKdbdM";
  // urlSafe: SafeResourceUrl | undefined;

  // constructor(public sanitizer: DomSanitizer) { }

  ngOnInit() {
  //   this.urlSafe = this.sanitizer.sanitize(SecurityContext.URL, this.url);
  //   console.log('this.urlSafe: '+this.urlSafe);
  // //   this.urlSafe= this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
  // //   // this.urlSafe= this.e_sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/5AYmaMKdbdM');
  }

  public getCourses():Array<{id:number, title:string, description:string, video:string}>{
    return this.courses;
  }
  public createCourse(contact: {id:number, title:string, description:string, video:string}){
    this.courses.push(contact);
  }
}

// Email List

// <iframe width="1128" height="644" src="https://www.youtube.com/embed/5AYmaMKdbdM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>