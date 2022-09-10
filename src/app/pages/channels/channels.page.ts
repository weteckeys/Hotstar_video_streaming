import { DummyService } from 'src/app/services/dummy.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-channels',
  templateUrl: './channels.page.html',
  styleUrls: ['./channels.page.scss'],
})
export class ChannelsPage implements OnInit {

    images;
    constructor(private dummy: DummyService) {
        this.images = this.dummy.channels;
    }

    ngOnInit() {
    }

}
