import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ResultPage from "./ResultPage/ResultPage";
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/result-page" component={ResultPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default Home;
