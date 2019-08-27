import React, { Component } from 'react'
import axios from 'axios';
import { Button, Jumbotron,Form, FormGroup, Label, Input,} from "reactstrap";
import './Newpost.css';

 class Signup extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user:{
            email: '',
            password: '',
            password_confirmation: '',
            userName: '',
            age: '',
            phoneNumber: '',
            location: '',
            gender: '',
            isOrganization: false
            }
        }
    }
    changeHandler  = (event) => {
        let newUser = {...this.state.user}
        newUser[event.target.name] = event.target.value
        this.setState(prevState=>({user: newUser}))
       
        console.log(this.state);    
    }
    submitHandler = (event) => {
        event.preventDefault()
        console.log(this.state)
        axios.post("https://cors-anywhere.herokuapp.com/https://volunteery-api.herokuapp.com/api/v1/users/", this.state)
        .then(res => {
            console.log(res)
            // this.props.history.push('/');
        }) .catch(err => {
            console.log(err);
            
        })

        alert("Thank You For Registeration ")
        this.props.history.push('/');
    }
    functionOrganization = (event) => {
        let newUser = {...this.state.user}
        newUser["isOrganization"] = !newUser["isOrganization"]
        this.setState(prevState=>({user: newUser}))
        console.log(newUser["isOrganization"] , 'func')
        console.log(this.state.user.isOrganization , 'state')
    }
    
    render() {
        
        const {email, password, password_confirmation, userName, age, phoneNumber, location, gender, isOrganization} = this.state
        return (
            
            <Jumbotron className="base-container" > 
                 <header className= "fonty">
                    <h3>Sign Up </h3>
                </header> 
                <Form onSubmit={this.submitHandler}>
                    <FormGroup>
                        <Label for="EventTitle"> Your Full Name</Label>
                        <Input
                        type="text"
                        name="userName"
                        placeholder="Full Name"
                        value={userName} 
                        onChange={this.changeHandler}
                        />
                    </FormGroup>

                    <FormGroup>
                        <Label for="EventTitle">Your Age</Label>
                        <Input
                        type="text"
                        name="age"
                        placeholder="age"
                        value={age} 
                        onChange={this.changeHandler}
                        />
                    </FormGroup>

                    <FormGroup>
                        <Label for="gender">Your Gender </Label>
                        <Input 
                        type="select" 
                        name="gender"
                        value={gender} 
                        onChange={this.changeHandler}>
                        <option selected="true" disabled="disabled">Choose Your Gender</option>
                        <option value='Male'>Male </option>
                        <option value='Famale'>Famale </option>
                        </Input>
                    </FormGroup>

                    <FormGroup>
                        <Label for="location">Your Location</Label>
                        <Input 
                        type="select" 
                        name="location" 
                        value={location} 
                        onChange={this.changeHandler}>
                        <option selected="true" disabled="disabled">Choose Your Location</option>
                        <option value='Jeddah'>Jeddah</option>
                        <option value='Makkah'>Makkah</option>
                        <option value='Riyadh'>Riyadh</option>
                        <option value='AlHasa'>AlHasa</option>
                        <option value='Abha'>Abha</option>
                        </Input>
                    </FormGroup> 

                    <FormGroup>
                        <Label for="password_confirmation">Your Phone Number</Label>
                        <Input
                        type="tel"
                        name="phoneNumber"
                        placeholder="Phone Number"
                        value={phoneNumber}
                        onChange={this.changeHandler}
                        />
                    </FormGroup> 

                    <FormGroup>
                        <Label for="Email">Your Email Address</Label>
                        <Input
                        type="email"
                        name="email"
                        placeholder="example@address.com"
                        value={email}
                        onChange={this.changeHandler}
                        />
                    </FormGroup>

                    <FormGroup>
                        <Label for="password">Your Password</Label>
                        <Input
                        type="password"
                        name="password"
                        placeholder="password"
                        value={password}
                        onChange={this.changeHandler}
                        />
                    </FormGroup> 
                    
                    <FormGroup>
                        <Label for="password_confirmation">Your Password Confirmation</Label>
                        <Input
                        type="password_confirmation"
                        name="password_confirmation"
                        placeholder="Password Confirmation"
                        value={password_confirmation}
                        onChange={this.changeHandler}
                        />
                    </FormGroup> 
                   
                    <FormGroup check>
                        <Input 
                        type="checkbox" name="check" 
                        value={isOrganization}
                        onClick={this.functionOrganization} 
                        />
                        <Label for="Organization" check>Organization</Label>
                    </FormGroup>

                    <br/>

                    <Button  color="info" type="submit"> Sign Up</Button>
                     <p> Already have an account <a href="/signin">Sign In</a> </p>
            
                </Form>
            </Jumbotron>
        );
    }
}
export default Signup;