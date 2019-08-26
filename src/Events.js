import React from 'react'
import {
    Card, CardImg, CardBody, CardTitle, CardText, Button
  } from "reactstrap";
import "../src/App.css";

const Events = (props) => {
    
    return (
      
      <Card onClick={props.change} className="EventE">
        <CardImg  src={props.image} top width="100%" height="200"/>
        <CardBody>
          <CardTitle><strong>{props.title}</strong></CardTitle>
          <CardText><strong>number of Volunteers: </strong>{props.numVolunteers}</CardText>
          <CardText><strong>Start on: </strong> {props.startDate} </CardText>
          <CardText><strong>Location: </strong>{props.location}</CardText>
          {/* <Button color="link"className="float-right" onClick={props.change}>More Details</Button> */}
          <Button color="link" onClick={props.change}>More Details</Button>
        </CardBody>
      </Card>

    );
}

export default Events;