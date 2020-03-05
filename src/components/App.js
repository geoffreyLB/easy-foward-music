import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Loading from '@components/Loading/Loading';
import Home from '@components/Home/Home';
import SwitchMusic from '@components/SwitchMusic/SwitchMusic';

const App = () => {
  return (
    <div className="app">
      <Switch>
        <Route exact path="/" component={Loading} />
        <Route path="/home" component={Home} />
        <Route path="/switch-music" component={SwitchMusic} />
      </Switch>
    </div>
  );
};

export default App;
