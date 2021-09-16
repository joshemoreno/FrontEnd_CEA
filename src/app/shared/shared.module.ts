import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatChipsModule } from '@angular/material/chips';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTabsModule } from '@angular/material/tabs';
import { HomeComponent } from '../home/pages/home/home.component';
import { CardComponent } from './components/card/card.component';


@NgModule({
  declarations: [
    HomeComponent,
    CardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MatToolbarModule,
    MatChipsModule,
    MatSnackBarModule,
    MatTabsModule,
    CardComponent
  ]
})
export class SharedModule { }
