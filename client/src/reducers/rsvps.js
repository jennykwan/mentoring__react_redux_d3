const rsvps = (state = [], action) => {
  switch (action.type) {
  case 'NEW':
    console.log(`NEW: ${action.data}`);
    return [
      ...state,
      action.data
    ];
  default:
    return state;
  }
};

export default rsvps;
