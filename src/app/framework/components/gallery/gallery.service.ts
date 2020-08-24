import { Inject, Injectable, InjectionToken } from '@angular/core';
import { Subject, Observable, of } from 'rxjs';
import { FxGalleryItem } from './types/gallery-item';

@Injectable({
    providedIn: 'root'
})
export class FxGalleryService {
  public images$: Subject<FxGalleryItem[]>;
  
  constructor() {
    this.images$ = new Subject();
  }

  getGallery(name: string, limit?:number, offset?:number): void {

  }

  getGallerySearch(name: string, searchTerms: string, limit?:number, offset?:number): void {
    if ((searchTerms === null || searchTerms === '') || searchTerms.length < 3) {
      this.images$.next(null);
    } else {
      const result: FxGalleryItem[] = [
        FxGalleryItem.create('Berlin', 'https://en.wikipedia.org/wiki/Berlin#/media/File:Aerial_view_of_Berlin_(32881394137).jpg', 100, 100),
        FxGalleryItem.create('Berlin', 'https://en.wikipedia.org/wiki/Berlin#/media/File:Aerial_view_of_Berlin_(32881394137).jpg', 100, 100),
        FxGalleryItem.create('Berlin', 'https://en.wikipedia.org/wiki/Berlin#/media/File:Aerial_view_of_Berlin_(32881394137).jpg', 100, 100),
        FxGalleryItem.create('Berlin', 'https://en.wikipedia.org/wiki/Berlin#/media/File:Aerial_view_of_Berlin_(32881394137).jpg', 100, 100),
      ];
      this.images$.next(result);
    }
  }

  getGalleryItems(searchTerms: string): void {
    const result: FxGalleryItem[] = [
      FxGalleryItem.create('Berlin', 'https://en.wikipedia.org/wiki/Berlin#/media/File:Aerial_view_of_Berlin_(32881394137).jpg', 100, 100),
      FxGalleryItem.create('Berlin', 'https://en.wikipedia.org/wiki/Berlin#/media/File:Aerial_view_of_Berlin_(32881394137).jpg', 100, 100),
      FxGalleryItem.create('Berlin', 'https://en.wikipedia.org/wiki/Berlin#/media/File:Aerial_view_of_Berlin_(32881394137).jpg', 100, 100),
      FxGalleryItem.create('Berlin', 'https://en.wikipedia.org/wiki/Berlin#/media/File:Aerial_view_of_Berlin_(32881394137).jpg', 100, 100),
    ];
    this.images$.next(result);
  }
}