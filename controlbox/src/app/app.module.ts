import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './pages/search/search.component';
import { UserService } from './service/user.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ListaUsersComponent } from './component/lista-users/lista-users.component';
import { UserComponent } from './component/user/user.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalComponent } from './component/modal/modal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { DeleteComponent } from './component/modal/delete/delete.component';
import { MapperModule } from '@dynamic-mapper/angular';


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ListaUsersComponent,
    UserComponent,
    ModalComponent,
    DeleteComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgbModule,
    ReactiveFormsModule,
    MapperModule.withProfiles([])
  ],
  providers: [

  ],

  entryComponents: [ModalComponent],

  bootstrap: [AppComponent]
})
export class AppModule { }
