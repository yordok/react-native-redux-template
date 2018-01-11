import { types } from './actions';

const initialState = {
  root : undefined
}

export default function app(state = initialState, action = {}){
  switch(action.type){
    case types.ROOT_CHANGED:
    return {
      ...state,
      root: action.root
    }
    default:
    return state;
  }

}