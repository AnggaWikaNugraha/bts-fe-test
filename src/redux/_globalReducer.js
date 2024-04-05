import Type from './typeReducers';

const StatusPageState = {
  isAuthenticated: false,
  token: null,
  email: null,
  username: null,
};

export function StatusPageReducer(state = StatusPageState, action) {
  switch (action.type) {
    case Type.STATUS_PAGE_SET_MULTIPLE:
      return { ...state, ...action.payload };
    case Type.STATUS_PAGE_RESET_ALL:
      return StatusPageState;
    default:
      return state;
  }
}

export default {
  StatusPageReducer,
};