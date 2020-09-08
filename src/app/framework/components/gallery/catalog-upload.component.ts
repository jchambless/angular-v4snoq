import { Component, EventEmitter, OnDestroy, OnInit, Output, Input, HostListener, ElementRef } from '@angular/core';
import { Subject, Observable, of } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { FrameworkConfigService } from '../../services/config.service';
import { FxGalleryService } from './gallery.service';
import { FxGalleryItem } from './types/gallery-item';
import { IFxCategoryItem } from './types/category-item';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/api';
import * as moment from 'moment';

@Component({
  selector: 'fx-catalog-upload-dialog',
  template: `
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12">
          <p-fileUpload name="images[]" accept="image/*" customUpload="true" (uploadHandler)="handleUpload($event)" multiple="multiple"></p-fileUpload>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./gallery.css']
})
export class FxCatalogUploadDialogComponent implements OnInit, OnDestroy {
  
  constructor(
    private _fxConfig: FrameworkConfigService,
    public dialogRef: DynamicDialogRef,
    public dialogConfig: DynamicDialogConfig
  ) {
  }

  ngOnInit() {
  }

  ngOnDestroy() {
  }

  handleUpload($event) {
    this.dialogRef.close($event);
  }
}