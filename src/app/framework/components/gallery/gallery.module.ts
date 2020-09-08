import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FxSearchBarModule } from '../search-bar/search-bar.module';
import { FxGalleryComponent } from './gallery.component';
import { FxCreateCatalogDialogComponent } from './catalog-create.component';
import { FxCatalogUploadDialogComponent } from './catalog-upload.component';
import { FxGalleryService } from './gallery.service';
import { DialogService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { FrameworkSharedModule } from '../../shared.module';

@NgModule({
  declarations: [
    FxGalleryComponent,
    FxCreateCatalogDialogComponent,
    FxCatalogUploadDialogComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FrameworkSharedModule,
    FxSearchBarModule
  ],
  exports: [
    FxGalleryComponent
  ],
  providers: [
    DialogService,
    MessageService,
    FxGalleryService
  ],
  entryComponents: [
    FxCreateCatalogDialogComponent,
    FxCatalogUploadDialogComponent
  ]
})
export class FxGalleryModule {}