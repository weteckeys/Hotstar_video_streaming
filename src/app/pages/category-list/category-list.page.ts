import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DummyService } from 'src/app/services/dummy.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.page.html',
  styleUrls: ['./category-list.page.scss'],
})
export class CategoryListPage implements OnInit {

  images;
  title;
  constructor(private dummy: DummyService, private route: ActivatedRoute, private router: Router) {
    this.images = this.dummy.landscape;
  }

  ngOnInit() {
    this.route.queryParams.subscribe(data => {
      console.log(data);
      this.title = data.id;
    });
  }

  goToVideo() {
    this.router.navigate(['/video']);
  }

}
