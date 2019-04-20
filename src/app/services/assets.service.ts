import { Injectable } from '@angular/core';
import { Asset } from '../models/assets';
import { Subject } from 'rxjs';
import * as firebase from 'firebase';
import DataSnapshot = firebase.database.DataSnapshot;

@Injectable({
  providedIn: 'root'
})

export class AssetsService {

  assets: Asset[] = [];
  assetsSubject = new Subject<Asset[]>();

  emitAssets() {
    this.assetsSubject.next(this.assets);
  }

  saveAssets() {
    firebase.database().ref('/assets').set(this.assets);
  }

  getAssets() {
    firebase.database().ref('/assets')
      .on('value', (data: DataSnapshot) => {
          this.assets = data.val() ? data.val() : [];
          this.emitAssets();
        }
      );
  }

  getSingleAsset(id: number) {
    return new Promise(
      (resolve, reject) => {
        firebase.database().ref('/assets/' + id).once('value').then(
          (data: DataSnapshot) => {
            resolve(data.val());
          }, (error) => {
            reject(error);
          }
        );
      }
    );
  }

  createNewAsset(newAsset: Asset) {
    this.assets.push(newAsset);
    this.saveAssets();
    this.emitAssets();
  }

  removeAsset(assets: Asset) {
    const assetIndexToRemove = this.assets.findIndex(
      (AssetEl) => {
        if (AssetEl === assets) {
          return true;
        }
      }
    );
    this.assets.splice(assetIndexToRemove, 1);
    this.saveAssets();
    this.emitAssets();
  }

  constructor() {
    this.getAssets();
  }
}
