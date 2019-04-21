import { Component, OnInit } from '@angular/core';
import { Asset } from 'src/app/models/assets';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AssetsService } from '../../services/assets.service';
import { OperationsService } from 'src/app/services/operations.service';
import { Operation } from 'src/app/models/operations';


@Component({
  selector: 'app-asset-form',
  templateUrl: './asset-form.component.html',
  styleUrls: ['./asset-form.component.css']
})
export class AssetFormComponent implements OnInit {

  assetForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private assetsService: AssetsService,
              private operationService: OperationsService,
              private router: Router) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.assetForm = this.formBuilder.group({
      name: ['', Validators.required],
      value: [0, Validators.required],
      currency: ['', Validators.required],
      dateLimit: [new Date(), Validators.required],
      owner: ['', Validators.required],
      file: ''
    });
  }

  onSaveAsset() {
    const name = this.assetForm.get('name').value;
    const value = this.assetForm.get('value').value;
    const currency = this.assetForm.get('currency').value;
    const dateLimit = this.assetForm.get('dateLimit').value;
    const owner = this.assetForm.get('owner').value;
    const newAsset = new Asset(name, value, currency, dateLimit, owner);
    this.assetsService.createNewAsset(newAsset);
    const newOperation = new Operation('Ajout', name, new Date().toLocaleString());
    this.operationService.createNewOperation(newOperation);
    this.router.navigate(['/assets']);
  }

}
