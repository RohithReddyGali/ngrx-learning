import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as userActions from './user.action'
import { AuthService } from '../auth.service';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';


@Injectable({
  providedIn: 'root',
})

export class UserEffects {

    constructor(private actions$:Actions, private authService : AuthService) {
    }

    loadUsers$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(userActions.getUserData),
            mergeMap(() => this.authService.getLoggedInData().pipe(
                map(data => userActions.userSuccessData({data})),
                catchError(error => of(userActions.userErrorAction({error})))
            ))
        )
    })
}