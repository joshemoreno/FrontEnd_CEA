import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { OrganizadorRoutingModule } from './organizador-routing.module';
import { MetricsComponent } from './pages/metrics/metrics.component';
import { PersonalComponent } from './pages/personal/personal.component';
import { PersonalCardComponent } from './components/personal-card/personal-card.component';
import { RowCardComponent } from './components/row-card/row-card.component';
import { TableCardComponent } from './components/table-card/table-card.component';
import { ReactiveFormsModule} from '@angular/forms';
import { SupportCardComponent } from './components/support-card/support-card.component';
import { CommentTableComponent } from './components/comment-table/comment-table.component';
import { SurveyTableComponent } from './components/survey-table/survey-table.component';



@NgModule({
  declarations: [
    MetricsComponent,
    PersonalComponent,
    PersonalCardComponent,
    RowCardComponent,
    TableCardComponent,
    SupportCardComponent,
    CommentTableComponent,
    SurveyTableComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    OrganizadorRoutingModule,
    ReactiveFormsModule
  ]
})
export class OrganizadorModule { }
