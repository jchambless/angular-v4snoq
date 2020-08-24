import { Inject, Injectable, InjectionToken } from '@angular/core';
import { Subject, Observable, of } from 'rxjs';
import { FxGalleryItem } from './types/gallery-item';

@Injectable({
    providedIn: 'root'
})
export class FxGalleryService {
  constructor() {
  }

//https://en.wikipedia.org/wiki/Berlin#/media/File:Aerial_view_of_Berlin_(32881394137).jpg
  getGalleryItems(searchTerms: string): Observable<FxGalleryItem[]> {
    const result: FxGalleryItem[] = [
      {
        name: 'Berlin',
        uri: 'https://en.wikipedia.org/wiki/Berlin#/media/File:Aerial_view_of_Berlin_(32881394137).jpg'
      } as FxGalleryItem
    ];
    return of(result);
  }
}