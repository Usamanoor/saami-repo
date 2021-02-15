import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from "@angular/forms";


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { FormComponent } from './form/form.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MainComponent } from './main/main.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { StudentRegFromComponent } from './student-reg-from/student-reg-from.component';
import { StudentListComponent } from './student-list/student-list.component';
import { ListStdComponent } from './list-std/list-std.component';
import { InstructorComponent } from './instructor/instructor.component';
import { InstructorFormComponent } from './instructor-form/instructor-form.component';
import { InstructorListComponent } from './instructor-list/instructor-list.component';
import { ListInstComponent } from './list-inst/list-inst.component';
import { CourseFormComponent } from './course-form/course-form.component';
import { CourseRegFormComponent } from './course-reg-form/course-reg-form.component';
import { CourseListComponent } from './course-list/course-list.component';
import { ListCourComponent } from './list-cour/list-cour.component';
import { MainScreenComponent } from './main-screen/main-screen.component';
import { StuMainViewComponent } from './stu-main-view/stu-main-view.component';
import { StdViewComponent } from './std-view/std-view.component';
import { ParentCompComponent } from './parent-comp/parent-comp.component';
import { ChildCompComponent } from './child-comp/child-comp.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    FormComponent,
    MainComponent,
    AdminPanelComponent,
    StudentRegFromComponent,
    StudentListComponent,
    ListStdComponent,
    InstructorComponent,
    InstructorFormComponent,
    InstructorListComponent,
    ListInstComponent,
    CourseFormComponent,
    CourseRegFormComponent,
    CourseListComponent,
    ListCourComponent,
    MainScreenComponent,
    StuMainViewComponent,
    StdViewComponent,
    ParentCompComponent,
    ChildCompComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
