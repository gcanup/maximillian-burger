import * as actionTypes from '../actions'

const initialState = {
    results: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.STORE_RESULT:
        console.log('value is',state.results.concat())
        return {
            ...state,
            results: state.results.concat({id: new Date(), value:action.result})
        }
        case actionTypes.DELETE_RESULT:
        // const id = 2;
        // const newArray = [...state.results]
        // newArray.splice(id,1)
        const updatedArray = state.results.filter(result=> result.id !== action.resultElId)
        return {
            ...state,
            results: updatedArray
        }
    }
    console.log('counter is', state.results.value)
    return state;

};

export default reducer;