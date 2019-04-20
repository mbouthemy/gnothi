import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ParticipantService } from '../../services/participant.service';
import { Participant } from 'src/app/models/participants';

@Component({
  selector: 'app-participant-form',
  templateUrl: './participant-form.component.html',
  styleUrls: ['./participant-form.component.css']
})
export class ParticipantFormComponent implements OnInit {

  participantForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private participantsService: ParticipantService,
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
    this.participantsService.createNewParticipant(newParticipant);
    this.router.navigate(['/participants']);
  }

}
