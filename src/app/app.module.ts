import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { appRoutes } from './route.module';
import { HttpModule } from '@angular/http';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { MineComponent } from './components/mine/mine.component';

import { TabsModule } from 'ngx-bootstrap';

import {SERVICES} from './services';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MineComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes, {useHash: true}),
    BrowserModule,
    HttpModule,
    FormsModule,

    TabsModule.forRoot(),
  ],
  providers: [SERVICES],
  bootstrap: [AppComponent]
})
export class AppModule { }
