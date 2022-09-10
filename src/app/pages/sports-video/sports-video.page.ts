import { Component, OnInit } from '@angular/core';
import { DummyService } from 'src/app/services/dummy.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sports-video',
  templateUrl: './sports-video.page.html',
  styleUrls: ['./sports-video.page.scss'],
})
export class SportsVideoPage implements OnInit {

  sports;
  title;
  constructor(private dummy: DummyService, private route: ActivatedRoute, private router: Router) {
    this.sports = this.dummy.sports;
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
