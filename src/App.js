import React from 'react';
import NavbarMain from "./Navbar";
import './App.css';
import Home from './Home';
import { Route, Switch, BrowserRouter, Link} from 'react-router-dom';
import Newpost from './Newpost';
// import { Signup } from './signup'
// import { Signin } from "./signin";
import EventCard from './EventCard'

function App() {
  return (
    <div> 
    <NavbarMain />
    <BrowserRouter>
        <Switch>
        
        <Route exact path="/newpost" component={Newpost} />
        <Route exact path="/" component={Home} />
        {/* <Route path="/signup" component={Signup} />
        <Route path="/singin" component={Signin} /> */}
          <Route
            path="/" exact
                render={(routeProps) => (
                  <EventCard {...routeProps} events={this.state.events} />
                )}
          />
        </Switch>
        </BrowserRouter>
       
    </div>  
  );
}
export default App;
