import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RolesComponent } from './roles.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: RolesComponent,
        pathMatch: 'full'
      }
    ])
  ],
  declarations: [
    RolesComponent
  ]
})
export class RolesModule {}