import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AboutMe from "./components/AboutMe";
import Footer from "./components/Footer";
import Navigator from "./components/Navigator";

function App() {
  return (
    <div className='App w-screen flex justify-center source-sans subpixel-antialiased black'>
      <div className='flex flex-col w-screen max-w-screen-2xl'>
        <Router>
          <Navigator />
          <Switch>
            <Route path='/' exact>
              home
            </Route>
            <Route path='/works' exact>
              works
            </Route>
            <Route path='/aboutme' exact>
              <AboutMe />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </div>
    </div>
  );
}

export default App;
