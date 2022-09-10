import { Component, OnInit } from '@angular/core';
import { DummyService } from 'src/app/services/dummy.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.page.html',
  styleUrls: ['./video-list.page.scss'],
})
export class VideoListPage implements OnInit {

  images;
  title;
  constructor(private dummy: DummyService, private route: ActivatedRoute) {
    this.images = this.dummy.images;
  }

  ngOnInit() {
    this.route.queryParams.subscribe(data => {
      console.log(data);
      this.title = data.id;
    });
  }

}
