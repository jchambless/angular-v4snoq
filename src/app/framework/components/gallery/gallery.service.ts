import { Inject, Injectable, InjectionToken } from '@angular/core';
import { Subject, Observable, of } from 'rxjs';
import { mergeAll, mergeMap } from 'rxjs/operators';
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
    this.fireStorage.ref(location)
      .listAll()
      .pipe(mergeMap(r => r.items))
      .pipe(mergeMap(x => x.getDownloadURL()))
      .subscribe(c => {
        gallery.push(FxGalleryItem.create('pic 1', c, 350, 300));
        this.images$.next(gallery);
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

      console.log('Catalog item created below:');
      console.log(catalog);

      await this.createCatalog(catalog);
      this.catalogCreated$.next(catalog);
    });
  }

  openUploadDialog() {
    const dialogRef = this.dialogService.open(FxCatalogUploadDialogComponent, {});

    dialogRef.onClose.subscribe(result => {});
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
