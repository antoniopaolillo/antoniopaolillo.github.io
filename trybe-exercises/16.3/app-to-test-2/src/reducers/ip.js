const initialState = {
    data: [],
    isFetching: false,
    error: false
  };
  const ip = (state = initialState, action) => {
    switch (action.type) {
      case "LOAD_DATA_REQUEST":
        return {
          isFetching: true,
          data: [],
          erro: false
        };
      case "LOAD_DATA_SUCESS":
        return {
          isFetching: false,
          data: action.data,
          error: false
        };
      case "LOAD_DATA_ERROR":
        return {
          isFetching: false,
          data: [],
          error: true
        };
      default:
        return state;
    }
  };

  export default ip;
