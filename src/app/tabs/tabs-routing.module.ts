import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'store',
        loadChildren: () => import('../pages/store/store.module').then(m => m.StorePageModule)
      },
      {
        path: 'add-item',
        loadChildren: () => import('../pages/add-item/add-item.module').then(m => m.AddItemPageModule)
      },
      {
        path: 'auth',
        loadChildren: () => import('../pages/auth/auth.module').then(m => m.AuthPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/store',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
