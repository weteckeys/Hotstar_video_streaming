import { DummyService } from 'src/app/services/dummy.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-downloads',
  templateUrl: './downloads.page.html',
  styleUrls: ['./downloads.page.scss'],
})
export class DownloadsPage implements OnInit {

    images;
    constructor(private dummy: DummyService) {
        this.images = this.dummy.landscape;
    }

    ngOnInit() {
    }

}
