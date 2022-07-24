import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

export interface User{
  username:string,
  password:string
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Exam_form';

name:any="";
pass:any="";

user:User={
  username:'',
  password:""
}
constructor(){
  this.user={} as User;
}
myForm=new FormGroup({
  username:new FormControl('',[Validators.required,Validators.minLength(5),Validators.maxLength(10)]),
  password:new FormControl('',[Validators.required,Validators.minLength(5),Validators.maxLength(10)])
})
get username(){
  return this.myForm.get('username')
}
get password(){
  return this.myForm.get('password')
}
onSubmit(){
  console.log(this.myForm.value);
  this.name=this.myForm.value.username;
  this.pass=this.myForm.value.password;
  
}




}
