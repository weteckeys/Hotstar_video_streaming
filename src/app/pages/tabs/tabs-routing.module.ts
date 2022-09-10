import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../home/home.module').then(m => m.HomePageModule)
          }
        ]
      },
      {
        path: 'tv',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tv/tv.module').then(m => m.TvPageModule)
          }
        ]
      },
      {
        path: 'disney',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../disney/disney.module').then(m => m.DisneyPageModule)
          }
        ]
      },
      {
        path: 'sports',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../sports/sports.module').then(m => m.SportsPageModule)
          }
        ]
      },
      {
        path: 'news',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../news/news.module').then(m => m.NewsPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule { }
