import { Component, OnInit } from '@angular/core';
import { Asset } from '../models/assets';
import { Subscription } from 'rxjs';
import { AssetsService } from '../services/assets.service';
import { Router } from '@angular/router';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-asset-list',
  templateUrl: './asset-list.component.html',
  styleUrls: ['./asset-list.component.css']
})
export class AssetListComponent implements OnInit {

  assets: Asset[];
  assetsSubscription: Subscription;
  isAdmin: boolean;

  constructor(private assetsService: AssetsService, private router: Router,
              private messageService: MessageService) {}

  ngOnInit() {
    this.assetsSubscription = this.assetsService.assetsSubject.subscribe(
      (assets: Asset[]) => {
        this.assets = assets;
      }
    );
    this.assetsService.emitAssets();
    this.messageService.isAdmin.subscribe(data => this.isAdmin = data);
    console.log('value' + this.isAdmin);
  }

  onNewAsset() {
    this.router.navigate(['/assets', 'new']);
  }

  onDeleteAsset(asset: Asset) {
    this.assetsService.removeAsset(asset);
  }

  onViewAsset(id: number) {
    this.router.navigate(['/assets', 'view', id]);
  }
  
  ngOnDestroy() {
    this.assetsSubscription.unsubscribe();
  }

}
