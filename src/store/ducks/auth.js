import { createReducer, createActions } from 'reduxsauce';
import immutable from 'seamless-immutable';

const { Types, Creators } = createActions({

});

export const AuthTypes = Types;
export default Creators;

export const INICIAL_STATE = immutable({});

export const reducer = createReducer(INICIAL_STATE, {
  [Types.SIGN_IN_SUCESS]: reducer,
});
