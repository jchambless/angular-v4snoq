import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BlogComponent } from './blog.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: BlogComponent,
        pathMatch: 'full'
      }
    ])
  ],
  declarations: [
    BlogComponent
  ]
})
export class BlogModule {}