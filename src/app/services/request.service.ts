import { Injectable } from '@angular/core';
import { Asset } from '../models/assets';
import { Subject } from 'rxjs';
import * as firebase from 'firebase';
import DataSnapshot = firebase.database.DataSnapshot;
import { Participant } from '../models/participants';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  participants: Participant[] = [];
  participantsSubject = new Subject<Participant[]>();

  emitParticipants() {
    this.participantsSubject.next(this.participants);
  }

  saveParticipants() {
    firebase.database().ref('/requests').set(this.participants);
  }

  getParticipants() {
    firebase.database().ref('/requests')
      .on('value', (data: DataSnapshot) => {
          this.participants = data.val() ? data.val() : [];
          this.emitParticipants();
        }
      );
  }

  getSingleParticipant(id: number) {
    return new Promise(
      (resolve, reject) => {
        firebase.database().ref('/requests/' + id).once('value').then(
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
