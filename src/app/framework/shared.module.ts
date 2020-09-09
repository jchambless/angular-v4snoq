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
import {PanelModule} from 'primeng/panel';
import {MenubarModule} from 'primeng/menubar';
import {MegaMenuModule} from 'primeng/megamenu';
import {TabMenuModule} from 'primeng/tabmenu';
import {BreadcrumbModule} from 'primeng/breadcrumb';
import {TooltipModule} from 'primeng/tooltip';
import {OverlayPanelModule} from 'primeng/overlaypanel';
import {LightboxModule} from 'primeng/lightbox';
import {FieldsetModule} from 'primeng/fieldset';
import {TabViewModule} from 'primeng/tabview';

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
    MessageModule,
    PanelModule,
    MenubarModule,
    MegaMenuModule,
    TabMenuModule,
    BreadcrumbModule,
    TooltipModule,
    OverlayPanelModule,
    LightboxModule,
    FieldsetModule,
    TabViewModule
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
    MessageModule,
    PanelModule,
    MenubarModule,
    MegaMenuModule,
    TabMenuModule,
    BreadcrumbModule,
    TooltipModule,
    OverlayPanelModule,
    LightboxModule,
    FieldsetModule,
    TabViewModule
  ]
})
export class FrameworkSharedModule {}