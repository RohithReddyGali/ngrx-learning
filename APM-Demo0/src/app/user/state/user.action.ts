import { createAction, props } from '@ngrx/store';

export const ACTIONS_LIST = {
    maskUserName : '[User] Mask User Name',
    getUserData : '[User] Get User Data',
    userSuccessData: '[User] User Success Data',
    userErrorAction: '[User] '
}

export const maskUserNameAction = createAction(ACTIONS_LIST.maskUserName);

export const getUserData = createAction(ACTIONS_LIST.getUserData);

export const userSuccessData = createAction(ACTIONS_LIST.userSuccessData, props<any>());

export const userErrorAction = createAction(ACTIONS_LIST.userErrorAction, props<any>());