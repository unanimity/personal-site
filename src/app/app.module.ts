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
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { CompetenceComponent } from './pages/competence/competence.component';
import { HistoryComponent } from './pages/history/history.component';
import { LargeCardComponent } from './fragments/large-card/large-card.component';
import { HeroLogoComponent } from './fragments/hero-logo/hero-logo.component';
import { MoreComponent } from './fragments/more/more.component';
const appRoutes: Routes = [
/*  { path: 'crisis-center', component: CrisisListComponent },
  { path: 'hero/:id',      component: HeroDetailComponent },*/
  {
    path: '',
    component: HomeComponent,
    data: { title: 'Sergei Kharlamov' }
  },
  {
    path: 'HeroLogo',
    component: HeroLogoComponent,
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
    TitleMessageComponent,
    AboutMeComponent,
    ContactsComponent,
    ProjectsComponent,
    CompetenceComponent,
    HistoryComponent,
    LargeCardComponent,
    HeroLogoComponent,
    MoreComponent,



  ],
  imports: [  RouterModule.forRoot(appRoutes, { enableTracing: true } ),
    BrowserModule, BrowserAnimationsModule, MatSidenavModule, MatButtonModule, MatCheckboxModule,
    ScrollToModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
