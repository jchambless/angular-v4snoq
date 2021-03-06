import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: AdminComponent,
        children: [
          { path: '', redirectTo: 'dashboard' },
          { path: 'dashboard', loadChildren: 'app/admin/dashboard/dashboard.module#DashboardModule' },
          { path: 'users', loadChildren: 'app/admin/users/users.module#UsersModule' },
          { path: 'gallery', loadChildren: 'app/admin/gallery/gallery.module#GalleryModule' },
          { path: 'blog', loadChildren: 'app/admin/blog/blog.module#BlogModule' },
          { path: 'roles', loadChildren: 'app/admin/roles/roles.module#RolesModule' },
          { path: 'settings', loadChildren: 'app/admin/settings/settings.module#SettingsModule' }
        ]
      },
      { path: '**', redirectTo: '/app/admin/dashboard' }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule {}