import { DummyService } from 'src/app/services/dummy.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.page.html',
  styleUrls: ['./genres.page.scss'],
})
export class GenresPage implements OnInit {

  genres;
    constructor(private dummy: DummyService) {
        this.genres = this.dummy.genrens;
    }

    ngOnInit() {
    }

}
