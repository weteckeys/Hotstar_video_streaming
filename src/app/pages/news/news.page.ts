import { Component, OnInit } from '@angular/core';
import { DummyService } from 'src/app/services/dummy.service';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {

  images;
  slideOpts = {
    slidesPerView: 3,
  };

  news;
  reporter;
  constructor(private dummy: DummyService, private router: Router) {
    this.images = this.dummy.images;
    this.news = this.dummy.news;
    this.reporter = this.dummy.reporter;
  }

  ngOnInit() {
  }

  goToNewsList(val) {
    const navData: NavigationExtras = {
      queryParams : {
        id : val
      }
    };
    this.router.navigate(['/news-list'] , navData);
  }

}
