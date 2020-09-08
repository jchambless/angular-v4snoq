import { Inject, Injectable, InjectionToken } from '@angular/core';
import { Subject, BehaviorSubject, Observable, of, from } from 'rxjs';
import { mergeAll, mergeMap, finalize, takeUntil, tap, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { FxGalleryItem } from './types/gallery-item';
import { IFxCategoryItem, IGalleryDto } from './types/category-item';
import { FrameworkConfigService } from '../../services/config.service';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';
import { FxCreateCatalogDialogComponent } from './catalog-create.component';
import { FxCatalogUploadDialogComponent } from './catalog-upload.component';

import { DialogService, MessageService } from 'primeng/api';
import * as _ from 'lodash';
import * as moment from 'moment';

@Injectable({
    providedIn: 'root'
})
export class FxGalleryService {
  public images$: Subject<FxGalleryItem[]>;
  public catalogs$: Subject<IFxCategoryItem[]>;
  public catalogCreated$: Subject<any>;

  private _selectedCatalog: BehaviorSubject<string> = new BehaviorSubject<string>(null);
  
  constructor(
    private httpClient: HttpClient,
    private config: FrameworkConfigService,
    private fireStorage: AngularFireStorage,
    private fireStore: AngularFirestore,
    private dialogService: DialogService,
    private messageService: MessageService
  ) {
    this.images$ = new Subject();
    this.catalogs$ = new Subject();
    this.catalogCreated$ = new Subject();
  }

  getCatalogs(): void {
    this.fireStore.collection('gallery').valueChanges()
      .subscribe((gallery: IGalleryDto[]) => {
        if (_.isUndefined(gallery) || _.isNull(gallery))
          return;
        let catalogs: IFxCategoryItem[] = _.map(gallery, c => {
          return {name: c.name, code: c.location}
        });
        this.catalogs$.next(catalogs);
      }, (e: any) => {
        console.error(e);
      });
  }

  getGallery(location: string, limit?:number, offset?:number): void {
    let gallery = [];
    this.images$.next(null);
    this._selectedCatalog.next(location);
    this.fireStorage.ref(location)
      .listAll()
      .pipe(
        mergeMap(r => r.items), 
        mergeMap(x => x.getDownloadURL()), 
        finalize(() => this.images$.next(gallery)))
      .subscribe(c => {
        gallery.push(FxGalleryItem.create('pic 1', c, 350, 300));
      }, e => {
        console.error(e);
      });
    
  }

  openCatalogDialog() {
    const dialogRef = this.dialogService.open(FxCreateCatalogDialogComponent, {
      header: 'Create Catalog',
      width: '50%',
      contentStyle: {"max-height": "500px", "overflow": "auto"}
    });

    dialogRef.onClose.subscribe(async (catalog: IGalleryDto) => {
      if (_.isUndefined(catalog) || _.isNull(catalog) 
        || (_.isUndefined(catalog.location) || _.isNull(catalog.location)))
        return;
      await this.createCatalog(catalog);
      setTimeout(() => {
        this.catalogCreated$.next(catalog);
      }, 500);
    });
  }

  openUploadDialog() {
    const dialogRef = this.dialogService.open(FxCatalogUploadDialogComponent, {
      header: 'Upload Image',
      width: '50%',
      contentStyle: {"max-height": "500px", "overflow": "auto"}
    });

    dialogRef.onClose.subscribe(async (result) => {
      if (_.isUndefined(result) || _.isNull(result)) return;
      const location = this._selectedCatalog.getValue();
      await from(result.files).forEach((f: File) => {
        const fileReader = new FileReader();
        fileReader.addEventListener('load', async (event: any) => {
          const result = await this.fireStorage.upload(`${location}/${f.name}`, event.target.result);
        });
        fileReader.readAsArrayBuffer(f);
      });
      setTimeout(() => {
        this.getGallery(location);
      }, 1000);
    });
  }

  async createCatalog(catalog: IGalleryDto) {
    let docRef = await this.fireStore
      .collection('gallery')
      .add(catalog);
    this.messageService.add({
      severity: 'success', 
      summary: 'Create Catalog', 
      detail: `Successfully created catalog ${catalog.code}`});
  }
}
