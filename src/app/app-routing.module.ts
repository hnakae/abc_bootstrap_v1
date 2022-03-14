import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseCreateComponent } from './course-create/course-create.component';
import { HomeComponent } from './home/home.component';
// import { CourseDetailComponent } from './course-detail/course-detail.component';

const routes: Routes = [
  {path:  "", pathMatch:  "full",redirectTo:  "home"},
  {path: "home", component: HomeComponent},
  {path: "course-create", component: CourseCreateComponent},
  {path: "course-list", component: CourseListComponent},  
  // {path: "course-detail", component: CourseDetailComponent}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
