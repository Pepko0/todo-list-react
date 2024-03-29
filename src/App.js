import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import TasksPage from "./features/tasks/TasksPage";
import AuthorPage from "./features/tasks/AuthorPage";
import TaskPage from "./features/tasks/TaskPage";
import { StyledNavLink, Menu } from "./styled";

export default () => (
  <HashRouter>
    <nav>
      <Menu>
        <StyledNavLink to="/zadania">Zadania</StyledNavLink>
        <StyledNavLink to="/autor">Autor</StyledNavLink>
      </Menu>
      <Switch>
        <Route path="/zadania/:id">
          <TaskPage />
        </Route>
        <Route path="/zadania">
          <TasksPage />
        </Route>
        <Route path="/autor">
          <AuthorPage />
        </Route>
        <Route path="/">
          <Redirect to="/zadania" />
        </Route>
      </Switch>
    </nav>
  </HashRouter>
);
