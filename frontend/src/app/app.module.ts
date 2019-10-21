import { DashboardModule } from './components/dashboard/dashboard.module';
import { UsersModule } from './components/users/users.module';
import { SearchEngineModule } from './components/search-engine/search-engine.module';
import { IndexComponent } from './components/index/index.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import es from '@angular/common/locales/es';
import { AppRoutingModule } from './app-routing.module';
import { SearchTypesComponent } from './components/search-types/search-types.component';
import { Page404Component } from './components/page404/page404.component';

registerLocaleData(es);

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    SearchTypesComponent,
    Page404Component,
  ],
  imports: [
    BrowserModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SearchEngineModule,
    UsersModule,
    DashboardModule,

  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
