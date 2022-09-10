import { Component, OnInit } from '@angular/core';
import { DummyService } from 'src/app/services/dummy.service';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-premium',
  templateUrl: './premium.page.html',
  styleUrls: ['./premium.page.scss'],
})
export class PremiumPage implements OnInit {

  images;
  sports;
  animals;
  genrens;
  mainSlider = [
    'assets/imgs/landscape_imgs/1.jpg',
    'assets/imgs/landscape_imgs/2.jpg',
    'assets/imgs/landscape_imgs/3.jpg',
    'assets/imgs/landscape_imgs/4.jpg',
    'assets/imgs/landscape_imgs/5.png',
  ];
  slideOpts = {
    slidesPerView: 3,
  };

  slideOpts3 = {
    slidesPerView: 2,
  };
  constructor(private dummy: DummyService, private router: Router) {
    this.images = this.dummy.images;
    this.sports = this.dummy.sports;
    this.animals = this.dummy.animal;
    this.genrens = this.dummy.genrens;
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
