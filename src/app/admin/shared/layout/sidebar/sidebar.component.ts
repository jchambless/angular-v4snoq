import { Component, ViewChild, AfterViewInit, ElementRef, OnInit, OnDestroy } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Subject, of } from 'rxjs';
import { takeUntil, map, tap } from 'rxjs/operators';
import { FrameworkConfigService } from '../../../../framework/services/config.service';
import { IMenu } from '../../models/menu';
import { IMenuItem } from '../../models/menu-item';
import * as _ from 'lodash';

@Component({
  selector: 'admin-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.css']
})
export class SidebarComponent implements OnInit, OnDestroy {

  menu$: Subject<any>;
  config: any;

  private _unsubscribeAll: Subject<any>;

  constructor(
    private _configService: FrameworkConfigService,
    private _fireStore: AngularFirestore
  ) {
    this.menu$ = new Subject();
    this._unsubscribeAll = new Subject();
  }

  ngOnInit() {
    // Listen for configuration object changes
    this._configService.config
        .pipe(takeUntil(this._unsubscribeAll))
        .subscribe(
            (config) => {
                this.config = config;
            }
        );
    // We grab the admin menu collection. We filter and sort the menu before sending to 
    // the obserable for display.
    this._fireStore.collection('admin_menu').valueChanges()
      .pipe(
        takeUntil(this._unsubscribeAll),
        tap((m: any) => m.sort((a, b) => a.display_order - b.display_order)),
        map((m: any) => m.filter(y => y.is_enabled === true))
      )
      .subscribe((menuItems: IMenuItem[]) => {
        if (_.isUndefined(menuItems) || _.isNull(menuItems)) 
          return;
        const menu: IMenu = {
          name: 'admin_menu', 
          items: menuItems
        };
        this.menu$.next(menu);
      });
  }

  ngOnDestroy() {
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }
} 