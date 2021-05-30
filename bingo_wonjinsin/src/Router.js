import React from "react";
import {HashRouter as Router, Route} from "react-router-dom";

import ko from "./Routes/ko";
import en from "./Routes/en";

const AppRouter = ({ isLoggedIn }) => (
  <Router>
    <Route exact path="/" component={ko}></Route>
    <Route path="/en" component={en}></Route>
  </Router>
);

export default AppRouter;
