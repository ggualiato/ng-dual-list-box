import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PeriodoBaseComponent } from './periodo-base/periodo-base.component';
import { FiltrosComponent } from './filtros/filtros.component';
import { FiltroComponent } from './filtro/filtro.component';
import { ListBoxComponent } from './list-box/list-box.component';


@NgModule({
  declarations: [
    AppComponent,
    PeriodoBaseComponent,
    FiltrosComponent,
    FiltroComponent,
    ListBoxComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
