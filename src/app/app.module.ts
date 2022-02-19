import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DetailsComponent } from './details/details.component';

// #fake-start#
import { FakeAPIService } from './_fake/fake-api.service';
import { environment } from 'src/environments/environment';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchListComponent } from './search-list/search-list.component';
//

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    DetailsComponent,
    SearchBarComponent,
    SearchListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
     // #fake-start#
     environment.isMockEnabled
     ? HttpClientInMemoryWebApiModule.forRoot(FakeAPIService, {
         passThruUnknownUrl: true,
         dataEncapsulation: false
       })
     : [],
   // #fake-end#
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
