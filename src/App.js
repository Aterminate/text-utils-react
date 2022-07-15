// import logo from './logo.svg';
import { useState } from 'react';
import { Alert } from './components/Alert';
import './App.css';
import { About } from './components/About';
import { Navbar } from './components/Navbar';
import {TextForm} from  './components/TextForm';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light')  // Wheather dark mode is enabled or not
  const [alert, setAlert] = useState(null)

  const showAlert = (message,type) => {
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
         setAlert(null);
      }, 1500);
  }
  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor =  '#07105c';
      showAlert('Dark mode has enabled','success');
      document.title = 'Text Utils - Dark Mode'
    }
    else{
      setMode('light');
      document.body.style.backgroundColor =  'white';
      showAlert('Light mode has enabled','primary');
      document.title = 'Text Utils - Light Mode'
    }
  }
  return (
      <>
        <Router>
          <Navbar title="TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode} />
          <Alert alert={alert}/>
          <div className="container">
          <Routes>
              <Route
                  path="/"
                  element={
                    <React.Fragment>
                      <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />
                    </React.Fragment>
                  }
              />
              <Route
                path="/About"
                element={<About />}
              />
          </Routes>
          {/* <Routes>
            <Route path="/about">
              <About/>
            </Route>
            <Route path="/">
            <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />
            </Route>
          </Routes> */}
          </div>
        </Router>
      </>
  );
}
export default App;