import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Top } from "../components/pages/Top";

export const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Top />
        </Route>
        <Route path="/users">
          <User />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
