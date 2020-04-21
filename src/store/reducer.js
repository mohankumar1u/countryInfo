import loadData from "./action";

const initalState = ["no data"];
const Reducer = (state = initalState, action) => {
  console.log("reducer", state, action);
  if (state === "no data" && action.type !== "loadData") {
    const setState = [...state];
    console.log("reducer first call", setState);
    //return setState;
    return setState;
  } else if (action.type === "loadData") {
    state = [...action.payload];
    const setState = [...state];
    console.log("reducer data load call", setState);
    //return setState;
    return setState;
  } else {
    return 0;
  }
};

export default Reducer;
