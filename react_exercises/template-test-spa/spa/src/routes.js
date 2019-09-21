import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Main from './pages/Main';
import Login from './pages/Login';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route  path="/" exact component={Login}/>
        <Route path="/show" component={Main} />
      </Switch>
    </BrowserRouter>
  );
}

export default AppRouter;