import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import createHistory from 'history/createBrowserHistory';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import { Router } from 'react-router';
import { createFirestoreInstance,firestoreReducer } from 'redux-firestore'
import {createStore,applyMiddleware,compose} from 'redux';
import firebase from 'firebase/app'
import firebase_config from './config/firebase_config'
import thunk from 'redux-thunk';
import { reduxFirestore, getFirestore } from 'redux-firestore'
import { ReactReduxFirebaseProvider, getFirebase,useFirebaseConnect} from 'react-redux-firebase'
import combined_reducers from './store/combined_reducers'
import {store} from './store/store'

const firebaseConfig = {}
const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
}

// const store = createStore(combined_reducers,
//   compose(
//     applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
//     reduxFirestore(firebase,firebase_config)
//   )
// );

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance
}
const history = createHistory()

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <Router history={history}>
           <App />
        </Router>
      </ReactReduxFirebaseProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
