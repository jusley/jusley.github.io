import React from 'react';

import { Homepage } from './components/Homepage/Homepage';
import { About } from './components/About/About';
import { Profile } from './components/Profile/Profile';
import { Case1 } from './components/Case/KneeModule/Case1';
import { History } from './components/History/History';
import { Case1Content } from './components/Case/KneeModule/Case1Content';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';


import './App.css';


function App() {
  return (
    <div className="App">
       <Router>
        <Route path='/About' exact component={About} />
        <Route path='/Profile' exact component={Profile}/>
        <Route path='/' exact component={Homepage} />
        <Route path='/Case' exact component={Case1} />
        <Route path='/History' exact component={History} />
        <Route path="/Knee" exact component={Case1Content}/>
      </Router>
    </div>

  );
}

export default App;
