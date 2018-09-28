import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {RouterModule, Routes} from '@angular/router';

import { HomeComponent } from './pages/home/home.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatSidenavModule} from '@angular/material';
import { ScrollToModule } from 'ng2-scroll-to-el';
import { LogoComponent } from './fragments/logo/logo.component';
import { TitleMessageComponent } from './fragments/title-message/title-message.component';
const appRoutes: Routes = [
/*  { path: 'crisis-center', component: CrisisListComponent },
  { path: 'hero/:id',      component: HeroDetailComponent },*/
  {
    path: '',
    component: HomeComponent,
    data: { title: 'Sergei Kharlamov' }
  }/*,
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }/*,
  { path: '**', component: PageNotFoundComponent }*/
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LogoComponent,
    TitleMessageComponent
  ],
  imports: [  RouterModule.forRoot(appRoutes, { enableTracing: true } ),
    BrowserModule, BrowserAnimationsModule, MatSidenavModule, MatButtonModule, MatCheckboxModule,
    ScrollToModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
