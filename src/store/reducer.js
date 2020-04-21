const initalState = ["no data"];
const Reducer = async (state = initalState, action) => {
  console.log(state, action.type);
  const setState = { ...state };
  console.log("reducer", setState, applyMiddleware(thunk));
  //return setState;
  return setState;
};

export default Reducer;
