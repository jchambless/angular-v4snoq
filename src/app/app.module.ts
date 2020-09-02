import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { MainModule } from './main/main.module';

import { FrameworkModule } from './framework/framework.module';
import { FrameworkSharedModule } from './framework/shared.module';
import { frameworkConfig } from './shared/framework-config';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';

@NgModule({
  imports:[ 
    BrowserModule, 
    HttpClientModule,
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
    SharedModule,
    AngularFireModule.initializeApp(frameworkConfig.fireBase),
    AngularFirestoreModule,
    AngularFireStorageModule
  ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
