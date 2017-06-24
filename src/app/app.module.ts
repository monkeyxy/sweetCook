import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { appRoutes } from './route.module';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';

import { TabsModule } from 'ngx-bootstrap';

import {SERVICES} from './services';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes, {useHash: true}),
    BrowserModule,
    HttpModule,
    TabsModule.forRoot(),
  ],
  providers: [SERVICES],
  bootstrap: [AppComponent]
})
export class AppModule { }
