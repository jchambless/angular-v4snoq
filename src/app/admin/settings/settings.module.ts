import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SettingsComponent } from './settings.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: SettingsComponent,
        pathMatch: 'full'
      }
    ])
  ],
  declarations: [
    SettingsComponent
  ]
})
export class SettingsModule {}