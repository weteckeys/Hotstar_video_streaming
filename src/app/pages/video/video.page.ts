import { Component, OnInit } from '@angular/core';
import { DummyService } from 'src/app/services/dummy.service';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-video',
  templateUrl: './video.page.html',
  styleUrls: ['./video.page.scss'],
})
export class VideoPage implements OnInit {

  slideOpts = {
    slidesPerView: 3,
  };
  images;

  constructor(private dummy: DummyService, private router: Router) {
    this.images = this.dummy.images;
  }

  ngOnInit() {
  }

  goTovideoList(val) {

    const navData: NavigationExtras = {
      queryParams: {
        id: val
      }
    };
    this.router.navigate(['/video-list'], navData);
  }

}
