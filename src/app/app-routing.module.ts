import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { StudentRegFromComponent } from './student-reg-from/student-reg-from.component';
import { StudentListComponent } from './student-list/student-list.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { InstructorComponent } from './instructor/instructor.component';
import { InstructorListComponent } from './instructor-list/instructor-list.component';
import { CourseFormComponent } from './course-form/course-form.component';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseRegFormComponent } from './course-reg-form/course-reg-form.component';
import { MainScreenComponent } from './main-screen/main-screen.component';
import { StdViewComponent } from './std-view/std-view.component';
import { ParentCompComponent } from './parent-comp/parent-comp.component';

// {path : "" , component:MainScreenComponent}



const routes: Routes = [

  {path : "", component:ParentCompComponent},
  {path : "main", component:MainComponent},
  {path: "admin-panel", component:AdminPanelComponent},
  {path: "student-reg-from", component:StudentRegFromComponent},
  {path: "student-list", component:StudentListComponent},
  {path:"student-reg-from/:id",component:StudentRegFromComponent},
  {path: "instructor", component:InstructorComponent},
  {path :"instructor-list", component:InstructorListComponent},
  {path : "instructor/:id", component:InstructorComponent},
  {path : "course-reg-form", component:CourseRegFormComponent},
  {path : "course-list", component:CourseListComponent},
  {path : "course-reg-form/:id", component:CourseRegFormComponent},
  {path : "student-view", component:StdViewComponent},
  { path: 'teacher', loadChildren: () => import('./teacher/teacher.module').then(m => m.TeacherModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
