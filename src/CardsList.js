import React, { Component } from 'react'
import { Container, Row, } from "reactstrap";
import Events from './Events';
import "../src/App.css";


class CardsList extends Component {

  change = () => {
    this.props.change(this.props.id)
  }
  render(){

    return (
      <div className="subComponent-lg">
        <Container>
          {/* <header className="text-center">
            <h2>MAKE A DIFFERENCE </h2>
            <p>Together We Can Change the World</p>
          </header>  */}
          <section>
            <Row>
                    {this.props.events.map((event, index) => {
                      return <Events
                        key={index}
                        image={event.image}
                        title={event.eventName}
                        startDate={event.startDate}
                        endDate={event.endDate}
                        location={event.eventLocation}
                        numVolunteers={event.numberOfVolunteer}
                        getEvent={()=>this.props.getOneEvent(event.id)}  
                        change={()=>this.props.change(event.id)}
                      />
                    })}
            </Row>
          </section>
        </Container>
      </div>
    );
  }
}

export default CardsList;
