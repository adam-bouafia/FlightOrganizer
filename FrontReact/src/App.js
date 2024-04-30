import {BrowserRouter as Router, Route,Routes} from 'react-router-dom';


import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Section from './components/Section';
import React from 'react';


function App() {

























  
  const [pageIndex,setPageIndex]=React.useState(0)
  return (
    <Router>
      <div className="App">
          <Navbar setPageIndex={setPageIndex}/>
          <Routes>
            <Route exact path="/" element={
              <>
                <div className='row'>
                <Intro/>
                <Section pageIndex={pageIndex}/>
                </div>
                
              </>
            }/>
          </Routes>
      </div>
    </Router>
  );
}

export default App;
