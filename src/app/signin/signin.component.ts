import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from '../services/message.service';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  signupForm: FormGroup;
  errorMessage: string;
  isAdmin: boolean;


  constructor(private formBuilder: FormBuilder,
              private router: Router, private messageService: MessageService) { }

  ngOnInit() {
    this.initForm();
    this.messageService.isAdmin.subscribe(data => this.isAdmin = data);
  }

  initForm() {
    this.signupForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern(/[0-9a-zA-Z]{4,}/)]]
    });
  }

  onSubmit() {
    const email = this.signupForm.get('email').value;
    const password = this.signupForm.get('password').value;
    
    if (email === 'admin@test.com') {
      this.router.navigate(['/admin']);
      this.messageService.changeAdmin();
      console.log('value: ' + this.isAdmin);
    } else if (email === 'user@test.com') {
      this.router.navigate(['/user']);
      this.messageService.changeUser();
      console.log('value: ' + this.isAdmin);
    } else {
      this.errorMessage = 'Erreur, adresse mail non reconnue';
    }

  }

}




