import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'tv',
    loadChildren: () => import('./pages/tv/tv.module').then(m => m.TvPageModule)
  },
  {
    path: 'movies',
    loadChildren: () => import('./pages/movies/movies.module').then(m => m.MoviesPageModule)
  },
  {
    path: 'sports',
    loadChildren: () => import('./pages/sports/sports.module').then(m => m.SportsPageModule)
  },
  {
    path: 'news',
    loadChildren: () => import('./pages/news/news.module').then(m => m.NewsPageModule)
  },
  {
    path: 'video',
    loadChildren: () => import('./pages/video/video.module').then(m => m.VideoPageModule)
  },
  {
    path: 'video-list',
    loadChildren: () => import('./pages/video-list/video-list.module').then(m => m.VideoListPageModule)
  },
  {
    path: 'category-list',
    loadChildren: () => import('./pages/category-list/category-list.module').then(m => m.CategoryListPageModule)
  },
  {
    path: 'category',
    loadChildren: () => import('./pages/category/category.module').then(m => m.CategoryPageModule)
  },
  {
    path: 'news-list',
    loadChildren: () => import('./pages/news-list/news-list.module').then(m => m.NewsListPageModule)
  },
  {
    path: 'sports-detail',
    loadChildren: () => import('./pages/sports-detail/sports-detail.module').then(m => m.SportsDetailPageModule)
  },
  {
    path: 'sports-video',
    loadChildren: () => import('./pages/sports-video/sports-video.module').then(m => m.SportsVideoPageModule)
  },
  {
    path: 'video-player',
    loadChildren: () => import('./pages/video-player/video-player.module').then( m => m.VideoPlayerPageModule)
  },
  {
    path: 'downloads',
    loadChildren: () => import('./pages/downloads/downloads.module').then( m => m.DownloadsPageModule)
  },
  {
    path: 'watchlist',
    loadChildren: () => import('./pages/watchlist/watchlist.module').then( m => m.WatchlistPageModule)
  },
  {
    path: 'disney',
    loadChildren: () => import('./pages/disney/disney.module').then( m => m.DisneyPageModule)
  },
  {
    path: 'premium',
    loadChildren: () => import('./pages/premium/premium.module').then( m => m.PremiumPageModule)
  },
  {
    path: 'channels',
    loadChildren: () => import('./pages/channels/channels.module').then( m => m.ChannelsPageModule)
  },
  {
    path: 'languages',
    loadChildren: () => import('./pages/languages/languages.module').then( m => m.LanguagesPageModule)
  },
  {
    path: 'genres',
    loadChildren: () => import('./pages/genres/genres.module').then( m => m.GenresPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },  {
    path: 'email-login',
    loadChildren: () => import('./pages/email-login/email-login.module').then( m => m.EmailLoginPageModule)
  },
  {
    path: 'mobile-login',
    loadChildren: () => import('./pages/mobile-login/mobile-login.module').then( m => m.MobileLoginPageModule)
  },

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
