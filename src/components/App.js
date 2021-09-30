import Home from "./Home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ResultPage from "./ResultPage/ResultPage";


const App = () => {
  return (
    <div>
      <Home />
      <BrowserRouter>
        <Switch>
          <Route exact path="/result-page" component={ResultPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
