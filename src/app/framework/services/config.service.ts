import { Inject, Injectable, InjectionToken } from '@angular/core';
import { ResolveEnd, Router } from '@angular/router';
import { Platform } from '@angular/cdk/platform';
import { BehaviorSubject, Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import * as _ from 'lodash';
import { FrameworkConfig } from '../types/framework-config';

export const FRAMEWORK_CONFIG = new InjectionToken<FrameworkConfig>('frameworkCustomConfig');

@Injectable({
    providedIn: 'root'
})
export class FrameworkConfigService {

  private _configSubject: BehaviorSubject<any>;
  private readonly _defaultConfig: any;

  constructor(
    private _platform: Platform,
    private _router: Router,
    @Inject(FRAMEWORK_CONFIG) private _config) 
  {
    this._defaultConfig = _config;
    this._init();
  }

  set config(value) {
      let config = this._configSubject.getValue();
      config = _.merge({}, config, value);
      this._configSubject.next(config);
  }

  get config(): any | Observable<any> {
      return this._configSubject.asObservable();
  }

  get defaultConfig(): any {
      return this._defaultConfig;
  }

  private _init(): void {
    this._configSubject = new BehaviorSubject(_.cloneDeep(this._defaultConfig));

    this._router.events
        .pipe(filter(event => event instanceof ResolveEnd))
        .subscribe(() => {
            if ( !_.isEqual(this._configSubject.getValue(), this._defaultConfig) ) {
                const config = _.cloneDeep(this._configSubject.getValue());
                this._configSubject.next(config);
            }
        });
  }

  setConfig(value, opts = {emitEvent: true}): void {
      let config = this._configSubject.getValue();

      config = _.merge({}, config, value);

      if (opts.emitEvent === true) {
          this._configSubject.next(config);
      }
  }

  getConfig(): Observable<any> {
      return this._configSubject.asObservable();
  }

  resetToDefaults(): void {
      this._configSubject.next(_.cloneDeep(this._defaultConfig));
  }
}