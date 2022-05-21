import {Route,Routes} from "react-router-dom";
import React from "react";
import Main from "./components/Main";
import Detail from './components/Detail';
import Score from './components/Score';

function App() {
  return (
    <div className="App">
        <Route exact path="/" component={Main} />
        <Route exact path="/Detail" component={Detail} />
        <Route exact path="/Score" component={Score} />
    </div>
  );
}

export default App;
