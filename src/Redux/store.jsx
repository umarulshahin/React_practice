import { createStore, combineReducers, applyMiddleware } from "redux";

import { thunk } from "redux-thunk";

const value = (state = 0, action) => {
  switch (action.type) {
    case "increment":
      return state + 1;

    case "decrement":
      return state - 1;

    default:
      return state;
  }
};

const show_label = (state = true, action) => {
  switch (action.type) {
    case "show_label":
      return action.payload;

    default:
      return state;
  }
};

function datainfo(state = { data: [], Loading: false, error: "" }, action) {

  switch (action.type) {
    case "set-data":
      return {
        ...state,
        data: action.payload,
      };
    case "loading":
      return {
        ...state,
        Loading: action.payload,
      };
    case "error":
      return {
        ...state,
        error: action.payload,
      };
    default:
        return state
  }
}

function set_data(data) {
  return {
    type: "set-data",
    payload: data,
  };
}

function setLoading(loading) {
  return {
    type: "loading",
    payload: loading,
  };
}

function setError(error) {
  return {
    type: "error",
    payload: error,
  };
}
function increment() {
  return {
    type: "increment",
  };
}

function decrement() {
  return {
    type: "decrement",
  };
}

function show_labelcheck(payload) {
  return {
    type: "show_label",
    payload: payload,
  };
}

const Reducer = combineReducers({
  value,
  show_label,
  datainfo,
});

const store = createStore(Reducer, applyMiddleware(thunk));

export default store;
export {
  increment,
  decrement,
  show_labelcheck,
  set_data,
  setLoading,
  setError,
};
