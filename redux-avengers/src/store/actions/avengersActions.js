import axios from 'axios';

export const AVENGERS_FETCH_START = 'AVENGERS_FETCH_START';
export const AVENGERS_FETCH_COMPLETE = 'AVENGERS_FETCH_COMPLETE';
export const AVENGERS_FETCH_FAILURE = 'AVENGERS_FETCH_FAILURE';

export const ADD_AVENGER_START = 'ADD_AVENGER_START';
export const ADD_AVENGER_COMPLETE = 'ADD_AVENGER_COMPLETE';
export const ADD_AVENGER_FAILURE = 'ADD_AVENGER_FAILURE';

export const getAvengers = () => dispatch => {
    dispatch({ type: AVENGERS_FETCH_START });
    const promise = axios.get('http://localhost:5000/avengers');

    promise
        .then(response => {
            dispatch({ type: AVENGERS_FETCH_COMPLETE, payload: response.data });
        })
        .catch(err => {
            dispatch({ type: AVENGERS_FETCH_FAILURE, payload: err });
        });
};

export const addNewAvenger = avenger => dispatch => {
    dispatch({ type: ADD_AVENGER_START });

    axios.post('http://localhost:5000/avengers', avenger)
        .then(response => {
            dispatch({ type: ADD_AVENGER_COMPLETE, payload: response.data });
        }).catch(err => {
            dispatch({ type: ADD_AVENGER_FAILURE, payload: err });
        });
}