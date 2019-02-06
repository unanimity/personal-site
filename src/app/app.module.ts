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
import {ProjectsService} from './pages/projects/projects.service';
import { LimitTextPipe } from './filters/limit-text.pipe';
import { TextPagesComponent } from './fragments/text-pages/text-pages.component';
import {HistoryService} from './pages/history/history.service';
import { LifestyleComponent } from './pages/lifestyle/lifestyle.component';
import {MasonryGalleryModule} from 'ngx-masonry-gallery';
import { LoginComponent } from './pages/login/login.component';
import { GeneralMenuComponent } from './fragments/general-menu/general-menu.component';
import { LifestyleMenuComponent } from './fragments/lifestyle-menu/lifestyle-menu.component';
import { PhotosComponent } from './pages/photos/photos.component';
import { StoryComponent } from './pages/story/story.component';
import { BooksComponent } from './pages/books/books.component';
import { MusicComponent } from './pages/music/music.component';
import { AdminPanelComponent } from './pages/admin-panel/admin-panel.component';
import { AdminMenuComponent } from './fragments/admin-menu/admin-menu.component';
import {AdminGuardService} from './pages/admin-panel/admin-guard.service';
import { MetricsLoaderComponent } from './metrics/metrics-loader/metrics-loader.component';
import {ImageViewerModule} from 'ngx-image-viewer';
const appRoutes: Routes = [
/*  { path: 'crisis-center', component: CrisisListComponent },
  { path: 'hero/:id',      component: HeroDetailComponent },*/
  {
    path: '',
    component: HomeComponent,
    data: { title: 'Sergei Kharlamov' }
  },
  {
    path: 'lifestyle',
    component: LifestyleComponent,
    data: { title: 'Sergei Kharlamov' }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: { title: 'Sergei Kharlamov' }
  },
  {
    path: 'admin',
    component: AdminPanelComponent,
    canActivate: [AdminGuardService],
    data: { title: 'Sergei Kharlamov' }
  }/*,
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }*/,
  { path: '**', redirectTo: ''}
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
    LimitTextPipe,
    TextPagesComponent,
    LifestyleComponent,
    LoginComponent,
    GeneralMenuComponent,
    LifestyleMenuComponent,
    PhotosComponent,
    StoryComponent,
    BooksComponent,
    MusicComponent,
    AdminPanelComponent,
    AdminMenuComponent,
    MetricsLoaderComponent,
  ],
  imports: [  RouterModule.forRoot(appRoutes),
    BrowserModule, BrowserAnimationsModule, MatSidenavModule, MatButtonModule, MatCheckboxModule,
    ScrollToModule.forRoot(), MasonryGalleryModule, ImageViewerModule.forRoot()
  ],
  providers: [ProjectsService, HistoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
