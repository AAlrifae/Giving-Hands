import React, { Component } from 'react'
import axios from 'axios';
import { Button, Jumbotron,Form, FormGroup, Label, Input,} from "reactstrap";
import './Sign.css';

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
            
            <main className="cover-page" id="Signinbg">
                <section className="wrapped-page"> 
                    <div className="Signin">
                            <h2>Welcome</h2>
                            <h4>Sign In to your account to continue</h4>
                        <Form className="Forma" onSubmit={this.submitHandler}>
                            
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

                            <Button  color="info" type="submit"> Sign In</Button>
                            <p> Don't have an account? <a href="/signup">Sign Up!</a></p>
                    
                        </Form>
                    </div>
                </section>
            </main>
        );
    }
}
export default Signin;