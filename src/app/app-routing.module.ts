import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { OneFormComponent } from './main-body/one-form/one-form.component';
import { TwoTableComponent } from './main-body/two-table/two-table.component';
import { MainBodyComponent } from './main-body/main-body.component';

const routes: Routes = [
  { path: 'one', component: OneFormComponent },
  { path: 'two', component: TwoTableComponent},
  { path: '', component: MainBodyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

