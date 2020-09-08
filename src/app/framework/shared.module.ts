import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarModule } from 'primeng/toolbar';
import { PaginatorModule } from 'primeng/paginator';
import {ButtonModule} from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DropdownModule } from 'primeng/dropdown';
import {InputTextModule} from 'primeng/inputtext';
import {DynamicDialogModule} from 'primeng/dynamicdialog';
import {ToastModule} from 'primeng/toast';
import {FileUploadModule} from 'primeng/fileupload';
import {ProgressBarModule} from 'primeng/progressbar';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {BlockUIModule} from 'primeng/blockui';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';

import { LoadingPipe } from './pipes/loading.pipe';

@NgModule({
  declarations: [
    LoadingPipe
  ],
  imports: [
    ToolbarModule,
    ButtonModule,
    CardModule,
    PaginatorModule,
    DropdownModule,
    InputTextModule,
    DynamicDialogModule,
    ToastModule,
    FileUploadModule,
    ProgressBarModule,
    ProgressSpinnerModule,
    BlockUIModule,
    MessagesModule,
    MessageModule
  ],
  exports: [
    LoadingPipe,
    ToolbarModule,
    ButtonModule,
    CardModule,
    PaginatorModule,
    DropdownModule,
    InputTextModule,
    DynamicDialogModule,
    ToastModule,
    FileUploadModule,
    ProgressBarModule,
    ProgressSpinnerModule,
    BlockUIModule,
    MessagesModule,
    MessageModule
  ]
})
export class FrameworkSharedModule {}