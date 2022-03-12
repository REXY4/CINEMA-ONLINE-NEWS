import React from 'react';
import NavbarComponents from './components/navbars/NavbarComponents';
import HandleRoute from './routes';
import {BrowserRouter as Router} from 'react-router-dom';


function App() {
  return (
    <Router>
      <NavbarComponents/>
      <HandleRoute/>
    </Router>
  );
}

export default App;
