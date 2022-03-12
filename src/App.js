import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import NavbarComponents from './components/navbars/NavbarComponents';
import HandleRoute from './routes';

function App() {
  return (
    <BrowserRouter>
      <NavbarComponents />
      <div className="mt-4">
        <HandleRoute />
      </div>
    </BrowserRouter>
  );
}

export default App;
