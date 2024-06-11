import { createReducer, on, createFeatureSelector, createSelector } from '@ngrx/store';
import { userState } from './models';
import * as userActions from './user.action'

const initialState: userState = {
    maskUserName: false,
    currentUser: null,
    error:null
}

const getUserFeature = createFeatureSelector<userState>('User');

export const getMaskUserName = createSelector(getUserFeature, (state: userState) => {
    return state.maskUserName
})

export const getCurrentUser = createSelector(getUserFeature, (state: userState) => {
    return state.currentUser
})

export const userReducer = createReducer<userState>(
    initialState,
    on(userActions.maskUserNameAction, (state: userState) => {
        return {
            ...state,
            maskUserName: !state.maskUserName
        }
    }),
    on(userActions.userSuccessData, (state: userState, action: any) => {
        return {
            ...state,
            currentUser: action.user
        }
    }),
    on(userActions.userErrorAction, (state: userState, action:any) => {
        return {
            ...state,
            error: action.error
        }
    })
)