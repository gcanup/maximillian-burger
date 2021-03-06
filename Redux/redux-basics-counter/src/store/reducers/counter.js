import * as actionTypes from '../actions'

const initialState = {
    counter: 0
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.INCREMENT:
        const newState = Object.assign({}, state)
        console.log(newState)
        newState.counter = state.counter + 1
        return newState;
        case actionTypes.DECREMENT:
        return {
            ...state,
            counter: state.counter - action.payload,
        }
        case actionTypes.ADD:
        return {
            ...state,
            counter: state.counter + action.payload
        }
        case actionTypes.SUBSTRACT:
        return {
            ...state,
            counter: state.counter - action.payload
        }
    }
    return state;

};

export default reducer;