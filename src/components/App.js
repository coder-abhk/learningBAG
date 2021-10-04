import Header from "./Header";
import Home from "./Home";
import Error404 from "./Erorr404";
import Profile from "./Profile";
import Basket from "./Basket";
import { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  const [isToggle, setIsToggle] = useState(false);
  return (
    <BrowserRouter>
      <div className="App">
        <Header setIsToggle={setIsToggle} isToggle={isToggle} />
        {isToggle ? <Basket /> : ""}
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/profile" component={Profile} />
          <Route path="" component={Error404} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
