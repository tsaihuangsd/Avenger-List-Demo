import {
    AVENGERS_FETCH_START,
    AVENGERS_FETCH_COMPLETE,
    AVENGERS_FETCH_FAILURE,
    ADD_AVENGER_START,
    ADD_AVENGER_COMPLETE,
    ADD_AVENGER_FAILURE,
} from '../actions';

const initialState = {
    addingAvenger: false,
    avengers: [],
    isLoading: false,
    error: '',
};

export const avengersReducer = (state = initialState, action) => {
    switch(action.type) {
        case AVENGERS_FETCH_START:
            return { ...state, isLoading: true };
        case AVENGERS_FETCH_COMPLETE:
            return { ...state, isLoading: false, avengers: action.payload};
        case AVENGERS_FETCH_FAILURE:
            console.log(action.payload);
            return { ...state, isLoading: false, error: action.payload};
        case ADD_AVENGER_START:
            return { ...state, addingAvenger: true };
        case ADD_AVENGER_COMPLETE:
            return { ...state, addingAvenger: false, avengers: action.payload};
        case ADD_AVENGER_FAILURE:
            console.log(action.payload);
            return { ...state, addingAvenger: false, error: action.payload};
        default:
            return state;
    }
}