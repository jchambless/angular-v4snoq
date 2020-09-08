import { Component, EventEmitter, OnDestroy, OnInit, Output, Input, HostListener, ElementRef } from '@angular/core';
import { Subject, Observable, of } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { FrameworkConfigService } from '../../services/config.service';
import { FxGalleryService } from './gallery.service';
import { FxGalleryItem } from './types/gallery-item';
import { IFxCategoryItem } from './types/category-item';

@Component({
  selector: 'fx-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.css']
})
export class FxGalleryComponent implements OnInit, OnDestroy {

  @Input() galleryName: string;
  @Input() galleryDescription: string;
  @Input() panelWidth: string;
  @Input() panelHeight: string;

  @Output() onImageClicked: EventEmitter<any>;
  @Output() onCatalogCreated: EventEmitter<any>;
  @Output() onImageUploaded: EventEmitter<any>;

  config: any;
  images$: Subject<any>;
  catalog: any;
  defaultWidth: string = 'auto';
  defaultHeight: string = 'auto';

  set selectedCatalog(value) {
    this._selectedCatalog = value;
    this._galleryService
      .getGallery((<IFxCategroyItem>value).code);
  }

  get selectedCatalog()  {
    return this._selectedCatalog;
  }
  
  private _unsubscribeAll: Subject<any>;
  private _selectedCatalog;

  constructor(
    private _configService: FrameworkConfigService,
    private _galleryService: FxGalleryService
  ) {
    this._unsubscribeAll = new Subject();
    this.images$ = new Subject();
    this.onImageClicked = new EventEmitter();
    this.onCatalogCreated = new EventEmitter();
    this.onImageUploaded = new EventEmitter();
  }

  ngOnInit() {
    this._configService.config
        .pipe(takeUntil(this._unsubscribeAll))
        .subscribe(
            (config) => {
                this.config = config;
            }
        );
    this._galleryService.images$
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((images: FxGalleryItem[]) => {
        if (images !== null && images.length > 0) {
          this.images$.next(images);
        } else {
          this.images$.next(null);
        }
      });
    this._galleryService.catalogs$
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((catalogs: any) => {
        this.catalog = catalogs;
        this.selectedCatalog = this.catalog[0];
      });

    this._galleryService.catalogCreated$
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((catalog: any) => {
        this.onCatalogCreated.emit(catalog);
      });
    
    this._galleryService.getCatalogs();
  }

  ngOnDestroy() {
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }

  imageClick(theImage: FxGalleryItem) {
    if (!theImage) return;
    this.onImageClicked.emit(theImage);
  }

  paginate($event) {

  }

  editCatalog($event) {

  }

  deleteCatalog($event) {
    
  }

  search($event) {
    // Have to do a check here for `string` because we are getting an object and string
    // this is being called twice so we need to figure out why that's happening.
    let searchTerms = (typeof $event === 'string') 
      ? $event 
      : null;
    if (searchTerms === null) return;
    // this._galleryService
    //   .getGallerySearch(this.galleryName, searchTerms);
  }
}