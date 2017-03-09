/**
 * Created by hien.phanthe on 3/3/17.
 */

function logger ({ getState }) {
    return (next) => (action) => {
        console.log('State before:', getState());
        console.log('Start an action:', action.type);
        let returnValue = next(action);
        console.log('State after run next action:', getState());

        return returnValue;
    }
}

export default logger;
