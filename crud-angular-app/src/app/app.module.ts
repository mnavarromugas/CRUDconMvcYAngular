import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddPublicidadComponent } from './components/add-publicidad/add-publicidad.component';
import { PublicidadDetailComponent } from './components/publicidad-detail/publicidad-detail.component';
import { PublicidadesListComponent } from './components/publicidades-list/publicidades-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AddPublicidadComponent,
    PublicidadDetailComponent,
    PublicidadesListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
