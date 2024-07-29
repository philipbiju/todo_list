import { NgClass, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, NgForm, FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, NgClass],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

  StrongPasswordRegx: RegExp =
  /^(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=\D*\d).{8,}$/;

  onSubmit(){
    console.log(this.loginForm.value);
  }

  loginForm!:FormGroup
  showPasswordRequirements: boolean = false;

  ngOnInit(){
    this.loginForm = new FormGroup({
      email:new FormControl('', [Validators.email,Validators.required]),
      password:new FormControl('', [Validators.minLength(4),Validators.required,Validators.pattern(this.StrongPasswordRegx)])
    })
}

onFocus() {
  this.showPasswordRequirements = true;
}

onBlur() {
  this.showPasswordRequirements = false;
}
}
