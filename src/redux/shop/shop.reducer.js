import shop_data from "../../data/shop_data";

const INITIAL_STATE = {
  collections: shop_data,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default shopReducer;
