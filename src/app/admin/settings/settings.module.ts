import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FrameworkSharedModule } from '../../framework/shared.module';
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
    ]),
    FrameworkSharedModule
  ],
  declarations: [
    SettingsComponent
  ]
})
export class SettingsModule {}