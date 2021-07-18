import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/hompage/homepage.component';

import './App.css';

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
);

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/hats" component={HatsPage} />
      </Switch>
    </div>
  );

  // return <HomePage></HomePage>;
  // return <div>Hello world</div>;
}

export default App;
