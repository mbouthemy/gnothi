import { Component, OnInit } from '@angular/core';
import { Asset } from 'src/app/models/assets';
import { Router, ActivatedRoute } from '@angular/router';
import { AssetsService } from '../../services/assets.service';

@Component({
  selector: 'app-single-asset',
  templateUrl: './single-asset.component.html',
  styleUrls: ['./single-asset.component.css']
})
export class SingleAssetComponent implements OnInit {

  asset: Asset;

  constructor(private route: ActivatedRoute, private assetsService: AssetsService,
              private router: Router) {}

  ngOnInit() {
    this.asset = new Asset('', 0, '', new Date(), '');
    const id = this.route.snapshot.params['id'];
    this.assetsService.getSingleAsset(+id).then(
      (asset: Asset) => {
        this.asset = asset;
      }
    );
  }

  onBack() {
    this.router.navigate(['/assets']);
  }

}
