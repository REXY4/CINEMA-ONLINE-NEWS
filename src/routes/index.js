import React from 'react';
import { Switch } from 'react-router-dom';
import {Routes, Route} from 'react-router-dom';
import HomePages from '../pages/homes/HomePages';

const HandleRoute = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={HomePages}/>
      </Switch>
    </>
  );
};





export default HandleRoute;
