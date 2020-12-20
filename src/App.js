import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./components/login/login";
import Dashboard from "./components/dashboard/dashboard";
import Test from "./test";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Login path="/" exact component={Login} />
            <Dashboard path="/dashboard" component={Dashboard} />
            <Test path="/test" component={Test} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
