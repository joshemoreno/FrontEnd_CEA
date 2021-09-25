import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { HeaderComponent } from './shared/components/header/header.component';
import { AuthModule } from './auth/auth.module';
import { StudentModule } from './student/student.module';
import { AuthService } from './auth/services/auth.service';
import { MonitorModule } from './monitor/monitor.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AuthModule,
    StudentModule,
    MonitorModule,
    SharedModule
  ],

  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
