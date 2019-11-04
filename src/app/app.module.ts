import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LibroAddComponent } from './libro-add/libro-add.component';
import { LibroListComponent } from './libro-list/libro-list.component';


import {LibroDataService} from './service/libro-data.service';
import { from } from 'rxjs';

import{ FormsModule} from '@angular/forms';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpClientModule } from '@angular/common/http';
import { InMemoryDataService } from './in-memory-data.service';


@NgModule({
  declarations: [
    AppComponent,
    LibroAddComponent,
    LibroListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false })
  
    
  ],
  providers: [LibroDataService,InMemoryDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
