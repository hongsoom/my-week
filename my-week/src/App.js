import {Route,Routes} from "react-router-dom";
import React from "react";
import Main from "./components/Main";
import Detail from './components/Detail';
import Score from './components/Score';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" component={Main}/>
        <Route exact path="/Detail" component={Detail} />
        <Route exact path="/Score" component={Score} />
      </Routes>
    </div>
  );
}

export default App;
