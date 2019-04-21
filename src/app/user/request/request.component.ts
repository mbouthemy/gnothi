import { Component, OnInit } from '@angular/core';
import { Asset } from 'src/app/models/assets';
import { RequestService } from 'src/app/services/request.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Participant } from 'src/app/models/participants';
import { MessageService } from 'src/app/services/message.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {

  participantForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private requestService: RequestService,
              private messageService: MessageService, private snackBar: MatSnackBar,
              private router: Router) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.participantForm = this.formBuilder.group({
      name: ['', Validators.required],
      leid: [0, Validators.required],
      country: ['', Validators.required],
      purpose: ['', Validators.required]
    });
  }

  onSaveParticipant() {
    const name = this.participantForm.get('name').value;
    const leid = this.participantForm.get('leid').value;
    const country = this.participantForm.get('country').value;
    const purpose = this.participantForm.get('purpose').value;
    const newParticipant = new Participant(name, leid, country, purpose);
    this.requestService.createNewParticipant(newParticipant);
    this.router.navigate(['/user']);
    // Add the notification.
    this.messageService.notificationOn();
    this.snackBar.open("Requête effectuée", "Fermer", {
      duration: 3000,
    });
  }

}
