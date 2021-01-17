import { Component, OnInit } from '@angular/core';

import { Kayit } from '../../models/kayit';
import { Sonuc } from '../../models/sonuc';
import { map } from 'rxjs/operators'
import { FbServisService1 } from 'src/app/services/fbServis.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  kayitlar: any;
  secKayit: Kayit = new Kayit();
  sonuc: Sonuc = new Sonuc();


  constructor(public fbServis: FbServisService1
    ) { }

  ngOnInit() {
    this.KayitListele();
    this.secKayit.key = null;
  }
  KayitSec(k: Kayit) {
    Object.assign(this.secKayit, k);

  }

  KayitListele() {
    this.fbServis.KayitListele().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(data => {
      this.kayitlar = data;
    });

  }


}

