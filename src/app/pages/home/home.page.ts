import { Component, OnInit } from '@angular/core';
import { DummyService } from 'src/app/services/dummy.service';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  images;
  sports;
  animals;
  genrens;
  slideOpts = {
    slidesPerView: 3,
  };

  slideOpts2 = {
    slidesPerView: 4,
  };

  slideOpts3 = {
    slidesPerView: 2,
  };

  mainSlider = [
    'assets/imgs/landscape_imgs/1.jpg',
    'assets/imgs/landscape_imgs/2.jpg',
    'assets/imgs/landscape_imgs/3.jpg',
    'assets/imgs/landscape_imgs/4.jpg',
    'assets/imgs/landscape_imgs/5.png',
  ];
  constructor(private dummy: DummyService, private router: Router) {
    this.images = this.dummy.images;
    this.sports = this.dummy.sports;
    this.animals = this.dummy.animal;
    this.genrens = this.dummy.genrens;
  }

  ngOnInit() {
  }

  goToVideo() {
    this.router.navigate(['/video']);
  }

  goTovideoList(val) {

    const navData: NavigationExtras = {
      queryParams : {
        id : val
      }
    };
    this.router.navigate(['/video-list'], navData);
  }

  goToCatList(val) {
    const navData: NavigationExtras = {
      queryParams : {
        id : val
      }
    };
    this.router.navigate(['/category-list'] , navData);
  }

  goToCatogory(val) {
    const navData: NavigationExtras = {
      queryParams : {
        id : val
      }
    };
    this.router.navigate(['/category'] , navData);
  }

}
