import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FxSearchBarModule } from '../search-bar/search-bar.module';
import { FxGalleryComponent } from './gallery.component';

@NgModule({
  declarations: [
    FxGalleryComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FxSearchBarModule
  ],
  exports: [
    FxGalleryComponent
  ]
})
export class FxGalleryModule {}