import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BreadcrumbModule } from '../breadcrumb';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    BreadcrumbModule,
    CommonModule,
    RouterModule.forChild([{path:'', component: HomeComponent}]),
    MatToolbarModule,
    MatProgressBarModule,
    MatCardModule
  ],
  exports: [HomeComponent]
})
export class HomeModule {}
