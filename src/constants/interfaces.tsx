import {ActionType} from '../store/actions/actions';

export interface IReduser {
  type: ActionType;
  payload?: any;
}
export interface IDispatch extends IReduser {}
