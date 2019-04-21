import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Operation } from '../models/operations';
import * as firebase from 'firebase';
import DataSnapshot = firebase.database.DataSnapshot;

@Injectable({
  providedIn: 'root'
})
export class OperationsService {


  operations: Operation[] = [];
  operationsSubject = new Subject<Operation[]>();

  emitOperations() {
    this.operationsSubject.next(this.operations);
  }

  saveOperations() {
    firebase.database().ref('/operations').set(this.operations);
  }

  getOperations() {
    firebase.database().ref('/operations')
      .on('value', (data: DataSnapshot) => {
          this.operations = data.val() ? data.val() : [];
          this.emitOperations();
        }
      );
  }

  getSingleOperation(id: number) {
    return new Promise(
      (resolve, reject) => {
        firebase.database().ref('/operations/' + id).once('value').then(
          (data: DataSnapshot) => {
            resolve(data.val());
          }, (error) => {
            reject(error);
          }
        );
      }
    );
  }

  createNewOperation(newOperation: Operation) {
    this.operations.push(newOperation);
    this.saveOperations();
    this.emitOperations();
  }

  removeOperation(operation: Operation) {
    const operationIndexToRemove = this.operations.findIndex(
      (operationEl) => {
        if (operationEl === operation) {
          return true;
        }
      }
    );
    this.operations.splice(operationIndexToRemove, 1);
    this.saveOperations();
    this.emitOperations();
  }

  constructor() {
    this.getOperations();
  }
}
