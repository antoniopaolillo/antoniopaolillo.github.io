const initialState = {
  data: [],
  isFetching: false,
  error: false
};
const ua = (state = initialState, action) => {
    switch (action.type) {
      case "LOAD_UA_REQUEST":
        return {
          isFetching: true,
          data: [],
          erro: false
        };
      case "LOAD_UA_SUCESS":
        return {
          isFetching: false,
          data: action.data,
          error: false
        };
      case "LOAD_UA_ERROR":
        return {
          isFetching: false,
          data: [],
          error: true
        };
      default:
        return state;
    }
  };

  export default ua;
