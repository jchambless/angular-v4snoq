import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

import { ChartsModule, ThemeService } from 'ng2-charts';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: DashboardComponent,
        pathMatch: 'full'
      }
    ]),
    ChartsModule
  ],
  declarations: [
    DashboardComponent
  ],
  exports: [
    RouterModule
  ],
  providers: [
    ThemeService
  ]
})
export class DashboardModule {}