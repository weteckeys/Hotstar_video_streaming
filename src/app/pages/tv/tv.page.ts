import { Component, OnInit } from '@angular/core';
import { DummyService } from 'src/app/services/dummy.service';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.page.html',
  styleUrls: ['./tv.page.scss'],
})
export class TvPage implements OnInit {

  images;
  sports;
  animals;
  genrens;
  channels;
  mainSlider = [
    'assets/imgs/landscape_imgs/6.jpg',
    'assets/imgs/landscape_imgs/7.jpg',
    'assets/imgs/landscape_imgs/8.jpg',
    'assets/imgs/landscape_imgs/9.jpg',
    'assets/imgs/landscape_imgs/10.jpg',
  ];
  slideOpts = {
    slidesPerView: 3,
  };

  slideOpts3 = {
    slidesPerView: 1.7,
  };
  constructor(private dummy: DummyService, private router: Router) {
    this.images = this.dummy.images;
    this.sports = this.dummy.sports;
    this.animals = this.dummy.animal;
    this.genrens = this.dummy.genrens;
    this.channels = this.dummy.channels;
  }

  ngOnInit() {
  }

  goTovideoList(val) {

    const navData: NavigationExtras = {
      queryParams : {
        id : val
      }
    };
    this.router.navigate(['/video-list'], navData);
  }
  
  goToVideo() {
    this.router.navigate(['/video']);
  }

}
