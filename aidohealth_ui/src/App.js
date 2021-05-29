import React, {Fragment} from 'react';
import './App.css';

import ViewInsurance from './components/ViewInsurance';


function App() {
  return (
    <Fragment>
      <div className="container">
          <div className="header">
            <br/>
            <h2> &nbsp;&nbsp; Test Aido Health - Annisa Seftiani </h2> <br/>
          </div>
        <ViewInsurance />
      </div>
    </Fragment>
  );
}

export default App;
