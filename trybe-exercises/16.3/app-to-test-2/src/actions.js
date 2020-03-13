
export const loadData = () => {
  return dispatch => {
    dispatch(loadDataRequest());
    fetch("http://httpbin.org/ip")
      .then(data => data.json())
      .then(response => dispatch(loadDataSucess(response)))
      .catch(() => dispatch(loadDataError()));
  };
};

export const loadDataError = () => {
  return {
    type: "LOAD_DATA_ERROR"
  };
};

export const loadDataSucess = data => {
  return {
    type: "LOAD_DATA_SUCESS",
    data
  };
};
export const loadDataRequest = () => {
  return {
    type: "LOAD_DATA_REQUEST"
  };
};

export const loadUA = () => {
    return dispatch => {
      dispatch(loadUARequest());
      fetch("http://httpbin.org/user-agent")
        .then(data => data.json())
        .then(response => dispatch(loadUASucess(response)))
        .catch(() => dispatch(loadUAError()));
    };
  };
  
  export const loadUAError = () => {
    return {
      type: "LOAD_UA_ERROR"
    };
  };
  
  export const loadUASucess = data => {
    return {
      type: "LOAD_UA_SUCESS",
      data
    };
  };
  export const loadUARequest = () => {
    return {
      type: "LOAD_UA_REQUEST"
    };
  };
