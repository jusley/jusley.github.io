import {combineReducers} from 'redux'
import {firestoreReducer} from 'redux-firestore'
import {firebaseReducer} from 'react-redux-firebase'

const combinedReducers = combineReducers({
    firestore : firestoreReducer,
    firebase : firebaseReducer
});

export default combinedReducers