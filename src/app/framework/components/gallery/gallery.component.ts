import { Component, EventEmitter, OnDestroy, OnInit, Output, Input, HostListener } from '@angular/core';
import { Subject, Observable, of } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { FrameworkConfigService } from '../../services/config.service';
import { FxGalleryService } from './gallery.service';

@Component({
  selector: 'fx-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.css']
})
export class FxGalleryComponent implements OnInit, OnDestroy {

  @Input() galleryName: string;
  @Input() galleryDescription: string;
  @Input() columns: number;
  @Input() rows: number;

  config: any;
  images$: Observable<any>;
  
  private _unsubscribeAll: Subject<any>;

  constructor(
    private _configService: FrameworkConfigService,
    private _galleryService: FxGalleryService
  ) {
    this._unsubscribeAll = new Subject();
  }

  ngOnInit() {
    this._configService.config
        .pipe(takeUntil(this._unsubscribeAll))
        .subscribe(
            (config) => {
                this.config = config;
            }
        );
  }

  ngOnDestroy() {
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }

  search($event) {
    if (typeof $event === "string") {
      console.log("Event: " + $event);

      if ($event === '') this.images$ = of(null);
      else this.images$ = this._galleryService.getGalleryItems($event);
      //this.images$ = of($event);
    }
  }
}