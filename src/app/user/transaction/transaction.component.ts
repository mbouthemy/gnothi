import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Asset } from 'src/app/models/assets';
import { Subscription } from 'rxjs';
import { AssetsService } from 'src/app/services/assets.service';
import { Participant } from 'src/app/models/participants';
import { ParticipantService } from 'src/app/services/participant.service';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { Operation } from 'src/app/models/operations';
import { OperationsService } from 'src/app/services/operations.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {

  assets: Asset[];
  assetsSubscription: Subscription;
  participants: Participant[];
  participantsSubscription: Subscription;
  transactionForm: FormGroup;
  private formSubmitAttempt: boolean;

  constructor(private assetsService: AssetsService,
              private participantsService: ParticipantService,
              private formBuilder: FormBuilder,
              private snackBar: MatSnackBar,
              private operationService: OperationsService,
              private router: Router) {}

  ngOnInit() {
    this.transactionForm = this.formBuilder.group({
      assetName: ['', Validators.required],
      participantName: ['', Validators.required]
    });

    // Asset subscription
    this.assetsSubscription = this.assetsService.assetsSubject.subscribe(
      (assets: Asset[]) => {
        this.assets = assets;
      }
    );
    this.assetsService.emitAssets();

    // Participant subscription
    this.participantsSubscription = this.participantsService.participantsSubject.subscribe(
      (participants: Participant[]) => {
        this.participants = participants;
      }
    );
    this.participantsService.emitParticipants();
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

  onSubmit() {
    const assetName = this.transactionForm.get('assetName').value;
    const ownerName = this.transactionForm.get('participantName').value;
    this.assetsService.changeOwner(assetName, ownerName);
    const newOperation = new Operation('Transfert', assetName, new Date().toLocaleString());
    this.operationService.createNewOperation(newOperation);
    this.router.navigate(['/user']);
  }

  ngOnDestroy() {
    this.assetsSubscription.unsubscribe();
    this.participantsSubscription.unsubscribe();
  }
}
