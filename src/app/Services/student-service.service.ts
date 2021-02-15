import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {


  //component interaction using service
  private teacherMessageSource = new Subject<string>();
  teacherMessage$ = this.teacherMessageSource.asObservable();

  baseUrl = environment.baseUrl;
  constructor(public http: HttpClient) { }

  //function
  sendMessage(message : string){
    this.teacherMessageSource.next(message);
  }

  public getStudentDetail(id):Observable<any>{
    return this.http.get(this.baseUrl+"students/"+id+"?_expand=course&_expand=instructor");
  }

  public getStudentEmail(value):Observable<any>{
    return this.http.get(this.baseUrl+"students?email=" + value);
  }


  public getStudents():Observable<any>{
    return this.http.get(this.baseUrl+"students");
  }
  public getInstructors():Observable<any>{
    return this.http.get(this.baseUrl+"instructors");
  }

  public getCourse():Observable<any>{
    return this.http.get(this.baseUrl+"courses");
  }

  public getStudentsById(id):Observable<any>{
    return this.http.get(this.baseUrl+"students/"+id);
  }

  public getInstructorById(id):Observable<any>{
    return this.http.get(this.baseUrl+"instructors/"+id);
  }

  public getCourseById(id):Observable<any>{
    return this.http.get(this.baseUrl+"courses/"+id);
  }

  public postStudent(obj):Observable<any>{
    return this.http.post(this.baseUrl+"students",obj)
  }

  public postInstructor(obj):Observable<any>{
    return this.http.post(this.baseUrl+"instructors",obj)
  }

  public postCourse(obj):Observable<any>{
    return this.http.post(this.baseUrl+"courses",obj)
  }

  public putStudent(id, obj):Observable<any>{
    return this.http.put(this.baseUrl+"students/"+id , obj)
  }

  public putInstructor(id, obj):Observable<any>{
    return this.http.put(this.baseUrl+"instructors/"+id, obj)
  }

  public putCourse(id, obj):Observable<any>{
    return this.http.put(this.baseUrl+"courses/"+id, obj)
  }

  public deleteStudent(id):Observable<any>{
    return this.http.delete(this.baseUrl+"students/"+id)
  }

  public deleteInstructor(id):Observable<any>{
    return this.http.delete(this.baseUrl+"instructors/"+id)
  }

  public deleteCourse(id):Observable<any>{
    return this.http.delete(this.baseUrl+"courses/"+id)
  }

  public newDate(){
    return new Date();
  }
}
