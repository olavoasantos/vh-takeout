import initialState from './store';
// import { TEST } from './actions';
// import { testMutator } from './mutators';

const reducer = ( state = initialState, action ) => {
  switch(action.type) {
    // case TEST:
    //   return testMutator(state, action);
    default:
      return state;
  }
}

export default reducer;
