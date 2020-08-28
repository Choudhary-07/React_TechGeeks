import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from './Pages/Home';
import About from './Pages/About';
import Services from './Pages/Services';
import Contact from './Pages/Contact';
import { Route, Switch, Redirect} from 'react-router-dom';
import Navbar from './Helper/Navbar';
import Footer from './Helper/footer';

const App= () => {
  return(
    <>
      <Navbar/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/About" component={About} />
          <Route exact path="/Services" component={Services} />
          <Route exact path="/Contact" component={Contact} />
          <Redirect to = "/" />
        </Switch>
      <Footer/>
    </>
  );
};

export default App;