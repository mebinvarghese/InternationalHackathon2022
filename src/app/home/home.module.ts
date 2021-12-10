import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { BannerComponent } from './components/banner/banner.component';
import { HowItWorksComponent } from './components/how-it-works/how-it-works.component';
import { ServicesComponent } from './components/services/services.component';
import { HomeComponent } from './home.component';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { SignUpComponent } from './components/sign-up/sign-up.component';


@NgModule({
  declarations: [
    HomeComponent,
    BannerComponent,
    AboutUsComponent,
    ServicesComponent,
    HowItWorksComponent,
    SignUpComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    IvyCarouselModule
  ]
})
export class HomeModule { }
