import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { FRAMEWORK_CONFIG } from './services/config.service';

@NgModule()
export class FrameworkModule {
  constructor(@Optional() @SkipSelf() parentModule: FrameworkModule) {
      if (parentModule) {
          throw new Error('FrameworkModule is already loaded. Import it in the AppModule only!');
      }
  }

  static forRoot(config): ModuleWithProviders {
    return {
        ngModule : FrameworkModule,
        providers: [
            {
                provide : FRAMEWORK_CONFIG,
                useValue: config
            }
        ]
    };
  }
}