import React from "react";
import "./App.css";
import { Container } from "semantic-ui-react";
import { Switch, Route } from "react-router-dom";
import Home from "./screens/Home";
import Products from "./screens/products/Products";
import ProductView from "./screens/products/ProductView";
import NoMatch from "./screens/NoMatch";
import NavBar from "./components/NavBar";
import Demo from "./screens/componentsDemo/Demo";
import Departments from "./screens/departments/departments";
import Department from "./screens/departments/department";

function App() {
  return (
    <>
      <NavBar />
      <Container>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/demo" component={Demo} />
          <Route exact path="/departments" component={Departments} />
          <Route exact path="/departments/:id" component={Department} />
          <Route exact path="/products" component={Products} />
          <Route exact path="/products/:id" component={ProductView} />
          <Route exact component={NoMatch} />
        </Switch>
      </Container>
    </>
  );
}

export default App;
