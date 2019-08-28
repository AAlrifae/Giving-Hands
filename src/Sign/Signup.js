import React, { Component } from 'react'
import axios from 'axios';
import { Button, Jumbotron,Form, FormGroup, Label, Input, Row} from "reactstrap";
import './Sign.css';

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
                
            <main className="cover-page" id="Signupbg">
                <section className="wrapped-page"> 
                    <div className="Signup">
                        <h2>Change the world</h2>
                        <h4>Have a heart lend a hand and Sign Up</h4>
                        
                            <Form className="Forma" onSubmit={this.submitHandler}>
                                <Row>
                                    <FormGroup>
                                        <Label for="fullname"> Your Full Name</Label>
                                        <Input
                                        type="text"
                                        name="userName"
                                        placeholder="Full Name"
                                        value={userName} 
                                        onChange={this.changeHandler}
                                        />
                                    </FormGroup>
                                    
                                    <FormGroup>
                                        <Label for="age">Your Age</Label>
                                        <Input
                                        type="text"
                                        name="age"
                                        placeholder="age"
                                        value={age} 
                                        onChange={this.changeHandler}
                                        />
                                     </FormGroup>
                                </Row>
                                <Row>
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
                                </Row> 
                                <Row>
                                    <FormGroup>
                                        <Label for="phoneNumber">Your Phone Number</Label>
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
                                </Row>
                                <Row> 
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
                                        <Label for="password_confirmation">Password Confirmation</Label>
                                        <Input
                                        type="password_confirmation"
                                        name="password_confirmation"
                                        placeholder="Password Confirmation"
                                        value={password_confirmation}
                                        onChange={this.changeHandler}
                                        />
                                    </FormGroup> 
                                </Row>
                                <FormGroup check>
                                    <Input 
                                    type="checkbox" name="check" 
                                    value={isOrganization}
                                    onClick={this.functionOrganization} 
                                    />
                                    <Label for="Organization" check>Organization</Label>
                                </FormGroup>

                                <Button  color="info" type="submit"> Sign Up</Button>
                                <p> Already have an account <a href="/signin">Sign In</a> </p>
                            </Form>
                       
                    </div>
                </section>
            </main>
        );
    }
}
export default Signup;