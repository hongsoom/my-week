import {Route,Switch} from "react-router-dom";
import React from "react";
import Main from "./components/Main";
import Detail from './components/Detail';


const App = () => {
  const [week, setWeek] = React.useState(['일', '월', '화', '수', '목', '금', '토']);

  return (
    <div className="App">
      <Switch>
        <Route path="/" exact>
          <Main week={week} />
        </Route> 
        <Route path="/detail/:id" exact>
          <Detail week={week} />
        </Route> 
      </Switch>
    </div>
  );
}

export default App;
