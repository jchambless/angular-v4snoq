import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ToolbarModule } from 'primeng/toolbar';
import { PaginatorModule } from 'primeng/paginator';
import {ButtonModule} from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DropdownModule } from 'primeng/dropdown';
import {InputTextModule} from 'primeng/inputtext';
import {DynamicDialogModule} from 'primeng/dynamicdialog';
import {ToastModule} from 'primeng/toast';
import {FileUploadModule} from 'primeng/fileupload';
import { FxSearchBarModule } from '../search-bar/search-bar.module';
import { FxGalleryComponent } from './gallery.component';
import { FxCreateCatalogDialogComponent } from './catalog-create.component';
import { FxCatalogUploadDialogComponent } from './catalog-upload.component';
import { FxGalleryService } from './gallery.service';
import { DialogService } from 'primeng/api';
import {MessageService} from 'primeng/api';

@NgModule({
  declarations: [
    FxGalleryComponent,
    FxCreateCatalogDialogComponent,
    FxCatalogUploadDialogComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FxSearchBarModule,
    ToolbarModule,
    ButtonModule,
    PaginatorModule,
    CardModule,
    ToastModule,
    DropdownModule,
    InputTextModule,
    FileUploadModule,
    DynamicDialogModule
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