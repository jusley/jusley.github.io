import React from 'react';

import { Homepage } from './components/Homepage/Homepage';
import { About } from './components/About/About';

import { Case1 } from './components/Case/KneeModule/Case1';
import { Case2 } from './components/Case/KneeModule/Case2';
import { Case3 } from './components/Case/KneeModule/Case3';
import  Case1Content  from './components/Case/KneeModule/Case1Content';
import  Case2Content  from './components/Case/KneeModule/Case2Content';
import  Case3Content  from './components/Case/KneeModule/Case3Content';
import { History } from './components/History/History';
import { PhysicalExam } from './components/PhysicalExam/PhysicalExam';
import { DifferentialDiag } from './components/Differential Diagnosis/DifferentialDiag';

import { HipCase1 } from './components/Case/HipModule/HipCase1';
import { HipCase2 } from './components/Case/HipModule/HipCase2';
import { HipCase3 } from './components/Case/HipModule/HipCase3';
import  HipCase1Content  from './components/Case/HipModule/HipCase1Content';
import  HipCase2Content  from './components/Case/HipModule/HipCase2Content';
import  HipCase3Content  from './components/Case/HipModule/HipCase3Content';

import Quiz from './components/quiz/quiz';
import Login from './components/login/login'
import SignUp from './components/SignUp/signUp'
import ProgressPage from './components/progressPage/progressPage';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';


function App() {
  return (
    <div className="App">
       <Router>
        <Route path='/About' exact component={About} />
        <Route path='/Quiz/:id' component={Quiz}/>
        <Route path='/Login' ecaxt component={Login}/>
        <Route path='/ProgressPage' ecaxt component={ProgressPage}/>
        <Route path='/SignUp' ecaxt component={SignUp}/>
        <Route path='/Profile' exact component={ProgressPage}/>
        <Route path='/' exact component={Homepage} />


        <Route path='/Knee1Start' exact component={Case1} />
        <Route path='/Knee2Start' exact component={Case2}/>
        <Route path='/Knee3Start' exact component={Case3}/>
        <Route path='/PhysicalExam' exact component={PhysicalExam} />
        <Route path='/History' exact component={History} />
        <Route path="/Knee1" exact component={Case1Content}/>
        <Route path="/Knee2" exact component={Case2Content}/>
        <Route path="/Knee3" exact component={Case3Content}/>
        <Route path='/DifferentialDiag' exact component={DifferentialDiag} />

        
        <Route path="/Hip1" exact component={HipCase1Content}/>
        <Route path="/Hip2" exact component={HipCase2Content}/>
        <Route path="/Hip3" exact component={HipCase3Content}/>
        <Route path='/Hip1Start' exact component={HipCase1} />
        <Route path='/Hip2Start' exact component={HipCase2} />
        <Route path='/Hip3Start' exact component={HipCase3} />
       
      </Router>
    </div>

  );
}

export default App;