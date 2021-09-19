import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";

const App = () => {
  const [dataHeader, setDataHeader] = useState();

  return (
    <BrowserRouter>
      <header>
        <Header dataHeader={dataHeader} setDataHeader={setDataHeader} />
      </header>
      <main>
        <Switch>
          <Route exact path="/"><Home/></Route>
          <Route exact path="/login">
            <Login setDataHeader={setDataHeader} />
          </Route>
          <Route exact path="/signup">
            <Register setDataHeader={setDataHeader} />
          </Route>
        </Switch>
      </main>
      <footer>
        <Footer />
      </footer>
    </BrowserRouter>
  );
};

export default App;
