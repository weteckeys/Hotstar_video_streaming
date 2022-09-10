import { DummyService } from 'src/app/services/dummy.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.page.html',
  styleUrls: ['./watchlist.page.scss'],
})
export class WatchlistPage implements OnInit {

    images;
    constructor(private dummy: DummyService) {
        this.images = this.dummy.landscape;
    }

    ngOnInit() {
    }

}
