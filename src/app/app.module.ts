import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { MainModule } from './main/main.module';

import { FrameworkModule } from './framework/framework.module';
import { FrameworkSharedModule } from './framework/shared.module';
import { frameworkConfig } from './shared/framework-config';

@NgModule({
  imports:[ 
    BrowserModule, 
    FrameworkModule.forRoot(frameworkConfig),
    FrameworkSharedModule,
    RouterModule.forRoot([
      {
        path: 'app',
        component: AppComponent,
        children: [
          { path: 'main', loadChildren: 'app/main/main.module#MainModule' },
          { path: 'admin', loadChildren: 'app/admin/admin.module#AdminModule' },
        ]
      },
      { path: '', redirectTo: '/app/admin/dashboard', pathMatch: 'full' },
      { path: '**', redirectTo: '/app/admin/dashboard' }
    ]),
    SharedModule
  ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
