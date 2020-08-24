import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ToolbarModule } from 'primeng/toolbar';
import { PaginatorModule } from 'primeng/paginator';
import { CardModule } from 'primeng/card';
import { FxSearchBarModule } from '../search-bar/search-bar.module';
import { FxGalleryComponent } from './gallery.component';

@NgModule({
  declarations: [
    FxGalleryComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FxSearchBarModule,
    ToolbarModule,
    PaginatorModule,
    CardModule
  ],
  exports: [
    FxGalleryComponent
  ]
})
export class FxGalleryModule {}