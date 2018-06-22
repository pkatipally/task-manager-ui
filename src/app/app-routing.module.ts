import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DetailsTableListComponent} from "./detailsTable/details-table-list/details-table-list.component";
import {UserInfoDetailsComponent} from './user/user-info-details/user-info-details.component';

const routes: Routes = [
  {path: '', redirectTo: '/user', pathMatch: 'full'},
  {path: 'user', component: UserInfoDetailsComponent},
  {path: 'detailsTable', component: DetailsTableListComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
