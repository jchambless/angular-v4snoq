import { Component, EventEmitter, OnDestroy, OnInit, Output, Input, HostListener, ElementRef } from '@angular/core';
import { Subject, Observable, of } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { FrameworkConfigService } from '../../services/config.service';
import { FxGalleryService } from './gallery.service';
import { FxGalleryItem, IFxGalleryItem } from './types/gallery-item';
import { IFxCategoryItem, IGalleryDto } from './types/category-item';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/api';
import * as moment from 'moment';

@Component({
  selector: 'fx-catalog-dialog',
  template: `
    <div id="fx-catalog-dialog" class="container-fluid">
      <div class="row mb-2">
        <div class="col-md-3"><label for="catalogName">Catalog</label></div>
        <div class="col-md-9">
          <input name="catalogName" type="text" size="30" pInputText [(ngModel)]="catalog.name"/>
        </div>
      </div>
      <div class="row mb-2">
        <div class="col-md-3"><label for="catalogCode">Code</label></div>
        <div class="col-md-9">
          <input name="catalogCode" type="text" size="30" pInputText [(ngModel)]="catalog.code" (keyup)="onCatalogKeyUp($event)"/>
        </div>
      </div>
      <div class="row mb-2">
        <div class="col-md-3"><label for="catalogCode">Location</label></div>
        <div class="col-md-9">
          <input [disabled]="true" name="catalogLocation" type="text" size="30" pInputText [(ngModel)]="catalog.location" placeholder="images/gallery/catalogname"/>
        </div>
      </div>
    </div>
    <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-2 mt-3 border-top">
      <button class="ui-button-secondary" pButton type="button" label="Cancel" (click)="cancel($event)"></button>
      <button class="ui-button-success" pButton type="button" label="Save" (click)="save($event)"></button>
    </div>
  `,
  styleUrls: ['./gallery.css']
})
export class FxCreateCatalogDialogComponent implements OnInit, OnDestroy {

  catalog: IGalleryDto;

  constructor(
    private _fxConfig: FrameworkConfigService,
    public dialogRef: DynamicDialogRef,
    public dialogConfig: DynamicDialogConfig
  ) {

  }

  ngOnInit() {
    this.catalog = {} as IGalleryDto;
  }

  ngOnDestroy() {
  }

  onCatalogKeyUp($event: any) {
    this.catalog.location = `images/gallery/${this.catalog.code}`;
  }

  save() {
    if (!this.catalog) {
      return;
    }
    //September 2, 2020 at 12:00:00 AM UTC-4
    this.catalog.created = moment.utc().format('MMMM Do YYYY at h:mm:ss A Z');
    this.dialogRef.close(this.catalog);
  }

  cancel() {
    this.dialogRef.close(null);
  }

}