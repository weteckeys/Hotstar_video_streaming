import { Component, OnInit } from '@angular/core';
import { DummyService } from 'src/app/services/dummy.service';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.page.html',
  styleUrls: ['./sports.page.scss'],
})
export class SportsPage implements OnInit {

  sports;
  genrens;
  mainSlider = [
    'assets/imgs/sports/sports1.jpg',
    'assets/imgs/sports/sports3.jpg',
    'assets/imgs/sports/sports4.jpg',
    'assets/imgs/sports/sports5.jpg',
    'assets/imgs/sports/sports7.jpg',
  ];
  slideOpts = {
    slidesPerView: 3,
  };

  slideOpts3 = {
    slidesPerView: 2,
  };
  constructor(private dummy: DummyService, private router: Router) {
    this.sports = this.dummy.sports;
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

  goToCatogory(val) {
    const navData: NavigationExtras = {
      queryParams : {
        id : val
      }
    };
    this.router.navigate(['/category'] , navData);
  }

  goToSportsDetail(val) {
    const navData: NavigationExtras = {
      queryParams : {
        id : val
      }
    };
    this.router.navigate(['/sports-detail'] , navData);
  }

  goToVideo() {
    this.router.navigate(['/video']);
  }

}
