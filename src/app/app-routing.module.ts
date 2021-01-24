import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const appRoutes: Routes = [
  {
    path: 'some-page',
    loadChildren: () => import('./some/some.module').then(m => m.SomeModule),
  },
  {
    path: 'another-page',
    loadChildren: () => import('./some/some.module').then(m => m.SomeModule),
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'another-page',
  }
];

export const AppRoutes = RouterModule.forRoot(appRoutes, {
  initialNavigation: 'disabled',
  onSameUrlNavigation: 'ignore',
  relativeLinkResolution: 'legacy',
  enableTracing: false,
});
