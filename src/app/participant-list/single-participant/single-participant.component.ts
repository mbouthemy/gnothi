import { Component, OnInit } from '@angular/core';
import { Participant } from 'src/app/models/participants';
import { Router, ActivatedRoute } from '@angular/router';
import { ParticipantService } from '../../services/participant.service';

@Component({
  selector: 'app-single-participant',
  templateUrl: './single-participant.component.html',
  styleUrls: ['./single-participant.component.css']
})
export class SingleParticipantComponent implements OnInit {

  participant: Participant;

  constructor(private route: ActivatedRoute, private participantsService: ParticipantService,
              private router: Router) {}

  ngOnInit() {
    this.participant = new Participant('', 0, '', '');
    const id = this.route.snapshot.params['id'];
    this.participantsService.getSingleParticipant(+id).then(
      (participant: Participant) => {
        this.participant = participant;
      }
    );
  }

  onBack() {
    this.router.navigate(['/participants']);
  }

}
