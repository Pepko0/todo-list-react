
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import Tasks from "./features/tasks/Tasks";
import Author from "./features/tasks/Author";

export default  () => (
  <BrowserRouter>
  <nav>
    <ul>
      <li>
        <Link to="/zadania">Zadania</Link>
      </li>
      <li>
        <Link to="/autor">Autor</Link>
      </li>
    </ul>
    <Switch>
      <Route path="/zadania">
        <Tasks />
      </Route>
      <Route path="/autor">
        <Author />
      </Route>
    </Switch>
  </nav>
</BrowserRouter>
);