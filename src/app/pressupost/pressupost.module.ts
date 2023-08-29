import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';


import { BugdetListComponent } from './budget/bugdet-list/bugdet-list.component';
import { HomeComponent } from './home/home.component';
import { LenguageModalComponent } from './modal/lenguage-modal/lenguage-modal.component';
import { PageModalComponent } from './modal/page-modal/page-modal.component';
import { PanellComponent } from './panell/panell.component';
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';



@NgModule({
  declarations: [
    BugdetListComponent,
    HomeComponent,
    LenguageModalComponent,
    PageModalComponent,
    PanellComponent,
    WelcomeComponent,

  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    PanellComponent,
  ]
})
export class PressupostModule { }
