import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AdminSharedModule } from '../shared/admin-shared.module';
import { GalleryComponent } from './gallery.component';
import { FxGalleryModule } from '../../framework/components/gallery/gallery.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: GalleryComponent,
        pathMatch: 'full'
      }
    ]),
    AdminSharedModule,
    FxGalleryModule
  ],
  declarations: [
    GalleryComponent
  ]
})
export class GalleryModule {}