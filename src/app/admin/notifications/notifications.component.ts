import { Component, OnInit } from '@angular/core';
import { Participant } from 'src/app/models/participants';
import { Router, ActivatedRoute } from '@angular/router';
import { ParticipantService } from '../../services/participant.service';
import { RequestService } from 'src/app/services/request.service';
import { MatSnackBar } from '@angular/material';
import { MessageService } from 'src/app/services/message.service';
import { Operation } from 'src/app/models/operations';
import { OperationsService } from 'src/app/services/operations.service';


@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {

  participant: Participant;

  constructor(private participantsService: ParticipantService,
              private requestService: RequestService, private router: Router,
              private operationService: OperationsService,
              private snackBar: MatSnackBar, private messageService: MessageService) {}

  ngOnInit() {
    this.participant = new Participant('', 0, '', '');
    const id = 0;
    this.requestService.getSingleParticipant(id).then(
      (participant: Participant) => {
        this.participant = participant;
      }
    );
  }

  onYes() {
    this.snackBar.open("L'entreprise a été ajoutée à la BlockChain", "Fermer", {
      duration: 2500,
    });

    this.participantsService.createNewParticipant(this.participant);
    this.requestService.removeParticipant(this.participant);
    this.messageService.notificationOff();
    const newOperation = new Operation('Ajout', this.participant.name, new Date().toLocaleString());
    this.operationService.createNewOperation(newOperation);
    this.router.navigate(['/participants']);
  }

  onNo() {
    this.snackBar.open("L'entreprise n'a pas été ajoutée.", "Fermer", {
      duration: 2500,
    });
    this.requestService.removeParticipant(this.participant);
    this.messageService.notificationOff();
    this.router.navigate(['/participants']);

  }

}
