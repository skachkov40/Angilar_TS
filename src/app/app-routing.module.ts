import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component'
import { TranslComponent } from './transl/transl.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  { path: '', redirectTo: '/list', pathMatch: 'full' },
  { path: 'list', component: ListComponent },
  { path: 'view', component: ViewComponent },
  { path: 'view/:text', component: ViewComponent },
  { path: 'transl', component: TranslComponent },
  { path: '**', redirectTo: '/list', pathMatch: 'full' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
