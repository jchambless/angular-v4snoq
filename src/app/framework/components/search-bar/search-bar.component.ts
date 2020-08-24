import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { FrameworkConfigService } from '../../services/config.service';

@Component({
  selector: 'fx-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.css']
})
export class SearchBarComponent implements OnInit, OnDestroy {
  private _unsubscribeAll: Subject<any>;

  @Output()
  input: EventEmitter<any>;

  collapsed: boolean;
  config: any;

  constructor(
    private _configService: FrameworkConfigService
  ) {
    this.collapsed = true;
    this.input = new EventEmitter();
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

  collapse(): void {
      this.collapsed = true;
  }

  expand(): void {
      this.collapsed = false;
  }

  search(event): void {
      this.input.emit(event.target.value);
  }
}