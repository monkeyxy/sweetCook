import { Routes, Route, CanActivate } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { MineComponent } from './components/mine/mine.component';
import { MainComponent } from './components/main/main.component';

export const appRoutes = [
  { path: 'login', component: LoginComponent },
  { path: 'mine', component: MineComponent },
  { path: 'main', component: MainComponent },
];
