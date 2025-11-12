const initialState = {
  shipments: [],
  loading: false,
  error: null,
};

export const FETCH_SHIPMENTS_REQUEST = 'FETCH_SHIPMENTS_REQUEST';
export const FETCH_SHIPMENTS_SUCCESS = 'FETCH_SHIPMENTS_SUCCESS';
export const FETCH_SHIPMENTS_FAILURE = 'FETCH_SHIPMENTS_FAILURE';

export default function shipmentReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_SHIPMENTS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_SHIPMENTS_SUCCESS:
      return {
        ...state,
        shipments: action.payload,
        loading: false,
      };
    case FETCH_SHIPMENTS_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}
