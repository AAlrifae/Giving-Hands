import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import EventCard from './EventCard';
import './App.css';


class Home extends Component {

  render() {
    return (
      <div>
        <Header />
        <EventCard  />
        <Footer />
      </div>
    );
  }
}

export default Home;
