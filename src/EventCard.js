// import React, { Component } from 'react'
import React, { Component } from 'react'
import axios from 'axios'
import EventName from './EventName';
import CardsList from './CardsList';


class EventCard extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      events:[],
      i: 0,
      id :0, 

    }
  }

  getOneEvent(id){
    axios.get(`https://cors-anywhere.herokuapp.com/https://eventy-api.herokuapp.com/events/${id}.json`)
    .then(res => {
        console.log(res.data);
        this.setState({events: [res.data]})
         
    })
    .catch(err => {
        console.log(err)
    })
  }
  
  componentDidMount() {
    
    axios.get('https://cors-anywhere.herokuapp.com/https://eventy-api.herokuapp.com/events.json')
    .then(res => {
        console.log(res.data);
        this.setState({events: res.data})
         
    })
    .catch(err => {
        console.log(err)
    })
}
change =(num)=>{
  this.setState({
    i : 1 ,
    id : num
  })
}
back = ()=>{
  this.setState({
    i : 0 ,
   
  })


}
  render() {
      
  
    let api = <CardsList events={this.state.events} getEvent={this.getOneEvent}  change = {this.change} />
    let api2 =  <EventName getEvent={()=>this.getOneEvent()} id={this.state.id} getList={()=>this.componentDidMount()}  events={this.state.events} back ={this.back} />
    
var s = [api , api2]
    return (
      <>
 

         
      {s[this.state.i]}
      </>

      
    )
  }
}

export default EventCard


