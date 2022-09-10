import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { DummyService } from 'src/app/services/dummy.service';

@Component({
  selector: 'app-sports-detail',
  templateUrl: './sports-detail.page.html',
  styleUrls: ['./sports-detail.page.scss'],
})
export class SportsDetailPage implements OnInit {

  sports;
  title;
  segId = 1;

  slideOpts3 = {
    slidesPerView: 2,
  };

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

  changeSegment(val) {
    this.segId = val;
  }

  goToSportsVideo(val) {
    const navData: NavigationExtras = {
      queryParams : {
        id : val
      }
    };
    this.router.navigate(['/sports-video'], navData);
  }

}
