import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserInfoDetailsComponent } from './user/user-info-details/user-info-details.component';
import { DetailsTableListComponent } from './detailsTable/details-table-list/details-table-list.component';
import { HeaderComponent } from './header/header.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AgGridModule} from 'ag-grid-angular';
import {MainRoutingModule} from './app-routing.module';
import {TaskInfoModel} from "./shared/taskInfo.model";
import {HttpModule} from "@angular/http";
import {HttpClientModule} from "@angular/common/http";
import {DataStorageService} from "./shared/data-storage.service";


@NgModule({
  declarations: [
    AppComponent,
    UserInfoDetailsComponent,
    DetailsTableListComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    MainRoutingModule,
    HttpClientModule,
    AgGridModule.withComponents([]),

  ],
  exports:[TaskInfoModel],
  providers: [DataStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
