import section_data from "../../data/section_data";

const INITIAL_STATE = { sections: section_data };

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
