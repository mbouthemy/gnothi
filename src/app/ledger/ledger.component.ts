import { Component, OnInit } from '@angular/core';
import { Operation } from '../../app/models/operations';
import { OperationsService } from '../services/operations.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-ledger',
  templateUrl: './ledger.component.html',
  styleUrls: ['./ledger.component.css']
})
export class LedgerComponent implements OnInit {

  operations: Operation[];
  operationsSubscription: Subscription;

  constructor(private operationsService: OperationsService, private router: Router) {}

  ngOnInit() {
    this.operationsSubscription = this.operationsService.operationsSubject.subscribe(
      (operations: Operation[]) => {
        this.operations = operations;
      }
    );
    this.operationsService.emitOperations();
    console.log(this.operations);
  }

  ngOnDestroy() {
    this.operationsSubscription.unsubscribe();
  }

}
