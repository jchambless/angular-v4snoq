import { Inject, Injectable, InjectionToken } from '@angular/core';
import { Subject, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { FxGalleryItem } from './types/gallery-item';
import { IFxCategoryItem } from './types/category-item';
import * as _ from 'lodash';

@Injectable({
    providedIn: 'root'
})
export class FxGalleryService {
  public images$: Subject<FxGalleryItem[]>;
  public catalogs$: Subject<IFxCategoryItem[]>;
  
  constructor(
    private httpClient: HttpClient
  ) {
    this.images$ = new Subject();
    this.catalogs$ = new Subject();
  }

  getCatalogs(): void {
    const result: IFxCategoryItem[] = [
      {
        name: "Berlin Pictures",
        code: "ber"
      } as IFxCategoryItem,
      {
        name: "France Pictures",
        code: "fra"
      } as IFxCategoryItem,
      {
        name: "Tokyo Pictures",
        code: "tok"
      } as IFxCategoryItem
    ];
    this.catalogs$.next(result);
  }

  getGallery(name: string, limit?:number, offset?:number): void {
    this.httpClient.get<any>(`assets/berlin.json`)
      .subscribe(result => {  
        console.log(result);
      }, error => {
        console.error(error);
      });  
    if (name && name === 'tok') {
      const result: FxGalleryItem[] = [
        FxGalleryItem.create('Tokyo 1', base64Image, 300, 350),
        FxGalleryItem.create('Tokyo 2', base64Image, 300, 350),
        FxGalleryItem.create('Tokyo 3', base64Image, 300, 350),
        FxGalleryItem.create('Tokyo 4', base64Image, 300, 350),
        FxGalleryItem.create('Tokyo 5', base64Image, 300, 350),
        FxGalleryItem.create('Tokyo 6', base64Image, 300, 350),
        FxGalleryItem.create('Tokyo 7', base64Image, 300, 350),
      ];
      this.images$.next(result);
    } else if(name && name === 'ber') {
      const result: FxGalleryItem[] = [
        FxGalleryItem.create('Berlin 1', base64Image, 300, 350),
        FxGalleryItem.create('Berlin 2', base64Image, 300, 350),
        FxGalleryItem.create('Berlin 3', base64Image, 300, 350),
        FxGalleryItem.create('Berlin 4', base64Image, 300, 350),
      ];
      this.images$.next(result);
    } else if (name && name === 'fra') {
      const result: FxGalleryItem[] = [
        FxGalleryItem.create('France 1', base64Image, 300, 350),
        FxGalleryItem.create('France 2', base64Image, 300, 350),
        FxGalleryItem.create('France 3', base64Image, 300, 350),
        FxGalleryItem.create('France 4', base64Image, 300, 350),
        FxGalleryItem.create('France 5', base64Image, 300, 350),
      ];
      this.images$.next(result);
    }
    else {
      this.images$.next(null);
    }
  }

  getGallerySearch(name: string, searchTerms: string, limit?:number, offset?:number): void {
    if ((searchTerms === null || searchTerms === '') || searchTerms.length < 3) {
      this.images$.next(null);
    } else {
      const result: FxGalleryItem[] = [
        FxGalleryItem.create('Berlin 1', base64Image, 300, 350),
        FxGalleryItem.create('Berlin 2', base64Image, 300, 350),
        FxGalleryItem.create('Berlin 3', base64Image, 300, 350),
        FxGalleryItem.create('Berlin 4', base64Image, 300, 350),
      ];
      result = _.filter(result, f => f.name.toLowerCase().includes(searchTerms.toLowerCase()));
      this.images$.next(result);
    }
  }
}

const base64Image: string = "data:image/png;base64,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zz77rHnllVfa01cQ1yCmQVy7U9axJ6wxd8vi1JkQAhCYRGBehMIA86eYZXGZF7PQtvvz008/3fYLP52YLJ/cOuOWBXJZhOYX8fnnnzfPPvts88477zTnzp1bOP0FcVsrWGOz95PI0QkCEChGYD431OWplk9UnSh1p6jlE1UQpe+//37hNBaubHfeeeeR6+J8ruqll15q+4Sf+ZxY+PO99967cD19991323zWbbfd1vz666/t1bE7ja0ULJ4vFIshJoJAcQLzOaU77rijPSl1V8AxghXazovguoR8J1w33XRTK1pBBGez2cI1s/vz119/3V4BX3zxxeaXX35pNjY2mldffXW9YPF8oXj8MCEEihNYvtp1ie2hV8LutNQJ3LwArVrMfGJ/OW81f2X8/fffD5P+//77b1tlDAL24YcftvmuIycsni8Ujx0mhEBRAqtEqbsCrkq6d1fA5dNX+HMQoscff7y58cYbm0ceeWRtMn45eT+/4CBY3bUvCNb8FfCTTz5pPvroozanFZ42LAgWzxeKxg2TQaAIgVVJ7yAy3Vusqc8aurdW4bR13XXXHeawbr755oVEftcuXDuXnyosXxfnxbRrG3JZ9913X3P27Nn/BSuQ29/fbx9u8QMBCNgiMP9wNKxs+XHo2IejnQiFpw/zyfTufVeYY/7h6HzSffnh6PLj0FUPR3/66afm9OnTrVM29vb2rly6dKl997C5uWnLU6wGAhBQT6DLrZ88ebLZOH/+/JWQ0Dpx4oT6hbEACEDAJoHLly+3r+T/A36l+992Hx4cAAAAAElFTkSuQmCC";