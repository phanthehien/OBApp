/**
 * Created by hien.phanthe on 3/3/17.
 */


// export default function checkAuthorize({ getState }) {
//     return (next) => (action) => {
//
//     }
// }

let checkAuthorize = getState => next => action => {
    console.log('running check authorize');
    next(action);
};

export default checkAuthorize