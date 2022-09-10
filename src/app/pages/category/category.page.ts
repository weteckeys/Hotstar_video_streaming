import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DummyService } from 'src/app/services/dummy.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.page.html',
  styleUrls: ['./category.page.scss'],
})
export class CategoryPage implements OnInit {

  genrens;
  title;
  sports;
  constructor(private dummy: DummyService, private route: ActivatedRoute) {
    this.genrens = this.dummy.genrens;
    this.sports = this.dummy.sports;
  }

  ngOnInit() {
    this.route.queryParams.subscribe(data => {
      console.log(data);
      this.title = data.id;
    });
  }

}
