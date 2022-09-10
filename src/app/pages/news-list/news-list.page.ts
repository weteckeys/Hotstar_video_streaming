import { Component, OnInit } from '@angular/core';
import { DummyService } from 'src/app/services/dummy.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.page.html',
  styleUrls: ['./news-list.page.scss'],
})
export class NewsListPage implements OnInit {

  news;
  title;
  constructor(private dummy: DummyService, private route: ActivatedRoute) {
    this.news = this.dummy.news;
  }

  ngOnInit() {
    this.route.queryParams.subscribe(data => {
      console.log(data);
      this.title = data.id;
    });
  }

}
