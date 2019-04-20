import { Injectable } from '@angular/core';
import { Participant } from '../models/participants';
import { Subject } from 'rxjs';
import * as firebase from 'firebase';
import DataSnapshot = firebase.database.DataSnapshot;

@Injectable({
  providedIn: 'root'
})
export class ParticipantService {

  participants: Participant[] = [];
  participantsSubject = new Subject<Participant[]>();

  emitParticipants() {
    this.participantsSubject.next(this.participants);
  }

  saveParticipants() {
    firebase.database().ref('/participants').set(this.participants);
  }

  getParticipants() {
    firebase.database().ref('/participants')
      .on('value', (data: DataSnapshot) => {
          this.participants = data.val() ? data.val() : [];
          this.emitParticipants();
        }
      );
  }

  getSingleParticipant(id: number) {
    return new Promise(
      (resolve, reject) => {
        firebase.database().ref('/participants/' + id).once('value').then(
          (data: DataSnapshot) => {
            resolve(data.val());
          }, (error) => {
            reject(error);
          }
        );
      }
    );
  }

  createNewParticipant(newParticipant: Participant) {
    this.participants.push(newParticipant);
    this.saveParticipants();
    this.emitParticipants();
  }

  removeParticipant(participant: Participant) {
    const participantIndexToRemove = this.participants.findIndex(
      (ParticipantEl) => {
        if (ParticipantEl === participant) {
          return true;
        }
      }
    );
    this.participants.splice(participantIndexToRemove, 1);
    this.saveParticipants();
    this.emitParticipants();
  }

  constructor() {
    this.getParticipants();
  }
}
