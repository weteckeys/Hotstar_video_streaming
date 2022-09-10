import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss']
})
export class AppComponent {
    constructor(
        private platform: Platform,
        private splashScreen: SplashScreen,
        private statusBar: StatusBar,
        private router: Router
    ) {
        this.initializeApp();
    }

    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleLightContent();
            this.splashScreen.hide();
        });
    }

    goToDownloads() {
        this.router.navigate(['/downloads']);
    }

    goToWatchlist() {
        this.router.navigate(['/watchlist']);
    }

    goToPremium() {
        this.router.navigate(['/premium']);
    }

    goToChannels() {
        this.router.navigate(['/channels']);
    }

    goToLanguages() {
        this.router.navigate(['/languages']);
    }

    goToGenres() {
        this.router.navigate(['/genres']);
    }

    goToLogin() {
        this.router.navigate(['/login']);
    }

    goToMovies() {
        this.router.navigate(['/movies']);
    }
}
