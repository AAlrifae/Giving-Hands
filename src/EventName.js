import React, { Component } from 'react'
import { Jumbotron, Container, Row, Col, Button, CardImg} from "reactstrap";
import "../src/App.css";

class EventName extends Component {
  state = {
    event : this.props.events[this.props.id-1]
  }
    render() {
      return (
          <Jumbotron mt-5> 
            <Row align-items-center> 
                <Col lg-6>
                  <Button d-flex justify-content-start color="link" onClick={this.props.back}>back</Button> <br/>
                  <CardImg img-fluid rounded width="100%" height="50%" src={this.state.event.image} alt='event' />
                      <hr/>
                    <Row lg-6 > 
                    <address>
                        <strong>Contact us</strong>
                        <br/>3481 Melrose Place
                        <br/>Beverly Hills, CA 90210
                        <br/>
                        <abbr title="Phone">P:</abbr>
                        (123) 456-7890
                        <br/>
                        <abbr title="Email">E:</abbr>
                        <a href="mailto:#">name@example.com</a>
                      </address>
                    <br/>
                    <Row className="float-right"> 
                      <Button color="info"> Click to Volunteer</Button>
                    </Row>
                  </Row>
                </Col>

                <Col lg-6>
                  <Row lg-6 > 
                    <h3>{this.state.event.eventName}</h3>
                    <Row className="float-right"> 
                      <Button color="link">Edit</Button>
                      <Button color="link">Delete</Button>
                    </Row>
                  </Row>
                    <hr/>
                    <p>Event Type: {this.state.event.eventCategory}</p>
                    <p> Event Start on: {this.state.event.startDate}</p>
                    <p> Event End on: {this.state.event.endDate}</p> 
                    <p> Event City: {this.state.event.eventLocation}</p>
                    <p> Event Description: {this.state.event.summary}</p>
                    <hr/>
                    <h5>Volunteer Needed</h5>
                    <p>Volunteer Category: {this.state.event.volunteerCategory}</p>
                    <p>Volunteer Number: {this.state.event.numberOfVolunteer}</p>
                    <p>Volunteer Gender: {this.state.event.conditions}</p>
                </Col>
            </Row>
          </Jumbotron>
      )
    }
}

export default EventName
