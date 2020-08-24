import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AdminSharedModule } from '../shared/admin-shared.module';
import { UsersComponent } from './users.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: UsersComponent,
        pathMatch: 'full'
      }
    ]),
    AdminSharedModule
  ],
  declarations: [
    UsersComponent
  ],
  exports: [
    RouterModule
  ]
})
export class UsersModule {}