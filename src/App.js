import React, { useEffect } from "react";
import Head from "./Components/Head";
import Counter from "./Components/Counter/Counter";
import TimeDisplay from "./Components/TimeDisplay/TimeDisplay";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./Styles.css";
import Data from "./Components/DataComp/DataComp";
import Currency from "./Components/Currency/Currency";

function App() {
  useEffect(() => {
    document.body.style.overflowX = "hidden";
    document.title = "React Solutions";
  }, []);

  return (
    <Router>
      <Head />
      <div className="page-container">
        <Switch>
          <Route path="/" exact component={Counter} />
          <Route path="/home" exact component={Counter} />
          <Route path="/time" exact component={TimeDisplay} />
          <Route path="/data" exact component={Data} />
          <Route path="/currency" exact component={Currency} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
