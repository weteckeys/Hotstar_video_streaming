import { Router, NavigationExtras } from '@angular/router';
import { DummyService } from 'src/app/services/dummy.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.page.html',
  styleUrls: ['./video-player.page.scss'],
})
export class VideoPlayerPage implements OnInit {

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
