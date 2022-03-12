import React from 'react';
import { Routes, Route } from 'react-router-dom';

import HomePages from '../pages/homes/HomePages';

function HandleRoute() {
  return (
    <Routes>
      <Route path="/" element={<HomePages />} />
    </Routes>
  );
}

export default HandleRoute;
