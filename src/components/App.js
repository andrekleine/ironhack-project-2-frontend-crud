import Home from "./Home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ResultPage from "./ResultPage/ResultPage";
import Details from "./Details/Details";
import Comments from "./Details/Comments/Comments";
import Login from "./Login/Login";
import { useState } from "react";

const App = () => {
  const [user, setUser] = useState("");

  console.log('App, user: ', user)

  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/details/:id/comments" component={Comments} />
          <Route path="/result-page" component={ResultPage} />
          <Route path="/details/:id" render={(props) => <Details {...props} user={user} />} />
          <Route path="/home" render={(props) => <Home {...props} user={user} />} />
          <Route
            exact path="/"
            render={(props) => <Login {...props} setUser={setUser} />}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
