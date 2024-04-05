import Type from './typeReducers';

const StatusPageState = {
  isAuthenticated: false,
  token: null,
  username: null,
};

const ceklisState = {
 data: [],
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

export function ceklisStateReducer(state = ceklisState, action) {
  switch (action.type) {
    case 'SET_DATA_CEKLIS':
      return { ...state, data: action.payload };
    case 'RESET_DATA_CEKLIS':
      return ceklisState;
    default:
      return state;
  }
}

export default {
  StatusPageReducer,
  ceklisStateReducer,
};