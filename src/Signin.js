import React, { Component } from 'react'
import axios from 'axios';
import { Button, Jumbotron,Form, FormGroup, Label, Input,} from "reactstrap";
import './Newpost.css';

 class Signin extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user:{
            email: '',
            password: '',
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
    render() {
        
        const {email, password} = this.state
        return (
            
            <Jumbotron className="base-container" > 
                 <header className= "fonty">
                    <h3>Sign In </h3>
                </header> 
                <Form onSubmit={this.submitHandler}>
                    
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

                    <br/>

                    <Button  color="info" type="submit"> Sign In</Button>
                     <p>  New user? <a href="/signup">Sign Up</a> to create your account  </p>
            
                </Form>
            </Jumbotron>
        );
    }
}
export default Signin;