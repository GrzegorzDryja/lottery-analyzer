import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppMainComponent } from './components/app-main/app-main.component';
import { AboutPageComponent } from './components/pages/about-page/about-page.component';
import { AuthorComponent } from './components/pages/author/author.component';

const routes: Routes = [
  {
    path: '',
    component: AppMainComponent
  },{
    path: 'about',
    component: AboutPageComponent
  },{
    path: 'author',
    component: AuthorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
