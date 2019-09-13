// let _nullState = {
//     current_track: null,
//     queue: []
// };

// export const sessionReducer = (state = _nullState, action) => {
//     Object.freeze(state);
//     switch (action.type) {
//         case RECEIVE_PLAY:
//             return Object.assign({}, { [current_track]: action.track, [queue]: action.queue });
//         case LOGOUT_CURRENT_USER:
//             return _nullState;
//         default:
//             return state;
//     }
// };