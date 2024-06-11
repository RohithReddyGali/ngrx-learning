import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from '../shared/shared.module';

import { LoginComponent } from './login.component';
import { StoreModule } from '@ngrx/store';
import { userReducer } from './state/user.reducer';
import { EffectsModule } from '@ngrx/effects'
import { UserEffects } from './state/user.effects';

const userRoutes: Routes = [
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(userRoutes),
    StoreModule.forFeature('User', userReducer),
    EffectsModule.forFeature([UserEffects])
  ],
  declarations: [
    LoginComponent
  ]
})
export class UserModule { }
