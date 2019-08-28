import React, { Component } from 'react'
import axios from 'axios';
import { Button, Jumbotron,Form, FormGroup, Label, Input, Row, Col} from "reactstrap";
import { withRouter } from 'react-router-dom';
import './Newpost.css';

class PostForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            eventName: '',
            startDate: '',
            endDate: '',
            eventLocation: '',
            numberOfVolunteer: 0,
            summary: '',
            conditions: '',
            image: '',
            eventCategory: '',
            volunteerCategory: ''
        }
    }

    changeHandler = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    submitHandler = (event) => {
        event.preventDefault()
        console.log(this.state);
        axios.post('https://cors-anywhere.herokuapp.com/https://eventy-api.herokuapp.com/events.json', this.state)
            .then(response => {
                console.log(response);
                this.props.history.push('/');
            })
            .catch(error => {
                console.log(error);
            })
       
          
        
    }

    render() {

        return (

           
            <Jumbotron className="base-container" > 
                <Row>
                    
                <Form className= "Forma" onSubmit={this.submitHandler}>
                    <FormGroup>
                    <Label for="EventTitle">Event Title</Label>
                    <Input
                    type="text"
                    name="eventName"
                    placeholder="Event Title"
                    onChange={this.changeHandler}
                    />
                </FormGroup>
     
                <FormGroup>
                    <Label for="exampleUrl">Event Image Url</Label>
                    <Input
                    type="url"
                    name="image"
                    placeholder="Event Image url"
                    onChange={this.changeHandler}
                    />
                </FormGroup>

                <FormGroup>
                    <Label for="startDate">Event Start Date</Label>
                    <Input
                    type="date"
                    name="startDate"
                    placeholder="Event Start Date"
                    onChange={this.changeHandler}
                    />
                </FormGroup>

                <FormGroup>
                    <Label for="endDate">Event End Date</Label>
                    <Input
                    type="date"
                    name="endDate"
                    placeholder="Event End Date"
                    onChange={this.changeHandler}
                    />
                </FormGroup>
    
                <FormGroup>
                    <Label for="eventCategory">Event Category</Label>
                    <Input type="select" name="eventCategory" onChange={this.changeHandler}>
                    <option  selected="true"  disabled="disabled">Choose Event Category</option>
                    <option value='Community'>Community</option>
                    <option value='Environmental'>Environmental</option>
                    <option value='Medical'>Medical</option>
                    <option value='Education'>Education</option>
                    <option value='Education'>Technology</option>
                    <option value='SpecialNeeds'>Special Needs</option>
                    <option value='Childern'>Childern</option>
                    <option value='Senior'>Senior</option>
                    <option value='Animal'>Animal</option>
                    <option value='Others'>Others</option>

                    </Input>
                </FormGroup>

                <FormGroup>
                    <Label for="eventLocation">Event Location</Label>
                    <Input type="select" name="eventLocation" onChange={this.changeHandler}>
                    <option selected="true" disabled="disabled">Choose Event Location</option>
                    <option value='Jeddah'>Jeddah</option>
                    <option value='Makkah'>Makkah</option>
                    <option value='Riyadh'>Riyadh</option>
                    <option value='AlHasa'>AlHasa</option>
                    <option value='Abha'>Abha</option>
                    </Input>
                </FormGroup>

                
                <FormGroup>
                    <Label for="summary">Event Description</Label> <br/>
                    <Input 
                    type="textarea" 
                    name="summary" 
                    placeholder="Write an Description About the Event"
                    onChange={this.changeHandler}  />
                </FormGroup>

            {/* ***************************** Volunteer ********************************** */}
               
                 <FormGroup>
                    <Label for="conditions">Gender of Needed Volunteer/s</Label>
                    <Input type="select" name="conditions" onChange={this.changeHandler}>
                    <option selected="true" disabled="disabled">Choose Volunteer/s Gender</option>
                    <option value='Male'>Male Only</option>
                    <option value='Famale'>Famale Only </option>
                    <option value='MixedGender'>Mixed Gender</option>
                    </Input>
                </FormGroup>

                <FormGroup>
                    <Label for="volunteerCategory"> Category of Needed Volunteer/s </Label>
                    <Input type="select" name="volunteerCategory" onChange={this.changeHandler}>
                    <option selected="true" disabled="disabled">Choose Volunteer/s Category</option>
                    <option value='Children'> Children</option>
                    <option value='Teenagers'>Teenagers</option>
                    <option value='Adults'>Adults</option>
                    <option value='AdultsandTeenagers'>Adults and Teenagers</option>
                    <option value='AdultsandTeenagers'>Family</option>
                    </Input>
                </FormGroup>

                <FormGroup>
                    <Label for="exampleNumber">Number of Needed Volunteer/s </Label>
                    <Input
                    type="number"
                    name="numberOfVolunteer"
                    placeholder=" Number of Volunteer/s"
                    onChange={this.changeHandler}
                    />
                </FormGroup>

                <Button color="info" type="submit"> Submit </Button>
                </Form>
                    <header className= "fonty">
                        <h3>Volunteer/s Needed </h3>
                    </header>   
                </Row>
            </Jumbotron>
 
      );
    }
}

export default withRouter(PostForm);
