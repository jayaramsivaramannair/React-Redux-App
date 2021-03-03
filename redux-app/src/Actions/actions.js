import axios from 'axios';

export const FETCH_REQUEST_PROGRESS = 'FETCH_REQUEST_PROGRESS';
export const FETCH_REQUEST_SUCCESS = 'FETCH_REQUEST_SUCCESS';
export const FETCH_REQUEST_FAILURE = 'FETCH_REQUEST_FAILURE';

const getRandomInt = () => {
    return Math.round(Math.random() * Math.floor(671));
}

export const getCharacter = () => (dispatch) => {
    dispatch({ type: FETCH_REQUEST_PROGRESS })

    axios.get(`https://rickandmortyapi.com/api/character/${getRandomInt()}`)
        .then((res) => {
            console.log(res.data);
            dispatch({ type: FETCH_REQUEST_SUCCESS, payload: res.data })
        })
        .catch((err) => {
            console.log(err.message)
            dispatch({ type: FETCH_REQUEST_FAILURE, payload: err.message })
        })
}
