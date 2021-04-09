import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AboutMe from "./components/AboutMe";
import Footer from "./components/Footer";
import Navigator from "./components/Navigator";
import Work from "./components/Work";
import Works from "./components/Works";

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
              <Works />
            </Route>
            <Route path='/works/:id' exact>
              <Work />
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
