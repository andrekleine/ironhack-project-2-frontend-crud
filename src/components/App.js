import Home from "./Home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ResultPage from "./ResultPage/ResultPage";
import Details from "./Details/Details";
import Comments from "./Details/Comments/Comments";

const App = () => {

  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/details/:id/comments" component={Comments}/>
          <Route path="/result-page" component={ResultPage} />
          <Route path="/details/:id" component={Details} />
          <Route exact path="/" component={Home}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
