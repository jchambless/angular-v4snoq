import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: MainComponent,
        children: [
          { path: '', redirectTo: 'home' },
          { path: 'home', component: HomeComponent }
        ]
      },
      { path: '**', redirectTo: '/app/main/home' }
    ])
  ],
  exports: [RouterModule]
})
export class MainRoutingModule {}