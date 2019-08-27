import React from "react";
import  {Component} from 'react';
import "../src/App.css";

var img = [];  
var i = 0;

class Header extends Component{
state = {
    img : ["https://intermountainhealthcare.org/-/media/images/modules/blog/posts/2019/03/volunteering-is-good-for-you-and-your-kids.jpg?la=en&h=504&w=896&mw=896&hash=12B60E2046185023A7BB36AF203332C86DB664AE" , 
"https://365atlantatraveler.com/wp-content/uploads/2018/11/volunteer.jpg",
"https://img.huffingtonpost.com/asset/5ada441118000028003842c9.jpeg?cache=duyxxq8xcy&ops=crop_0_290_4856_3337,scalefit_720_noupscale",
"https://www.frontstream.com/hubfs/Imported_Blog_Media/volunteering_hotmeal-1024x554.jpg",
"https://s18670.pcdn.co/wp-content/uploads/50-Volunteer-Ideas-for-Kids.jpg",
"https://gapforce.org/our-blog/wp-content/uploads/2016/04/shutterstock_305457083-small.jpg",
"https://www.kellyservices.ca/ca/siteassets/uploadedimages/canada_-_kelly_services/content_marketing/candidate_resource_center/2018/volunteer.jpg",
"https://cdn.aarp.net/content/dam/aarp/work/on-the-job/2015-08/740-Volunteer-your-way-to-next-job.imgcache.rev3e04f10287417ea880532326d1613331.jpg/jcr:content/renditions/cq5dam.web.420.270.jpeg",
"https://www.kvcdp.org/images/slide2.jpg",
"https://secure.i.telegraph.co.uk/multimedia/archive/02313/volunteer_2313728b.jpg"
],
i : ""

  }

  time =()=>{
    if (this.state.i === 9 ){
      this.setState({
        i : 0
      })
      
    }
    else {
      var i = Number(this.state.i) + 1
      this.setState({
        i :  i 
      })
    }
    return img[i]
    }

componentDidMount (){
  setInterval(this.time, 3000)
}

  render(){
      return(
        <div>
        <main style = {{backgroundImage: `url(${this.state.img[this.state.i]})`}}  className="cover-page" id="headerbg">
          <section className="wrapped-page">
            <div className="item-center">
              <h1>Giving Hands</h1>
              <br></br>
              <h3>Alone We can do little; Together we can do so Much. - Helen Keller </h3>
            </div>
          </section>
        </main>
      </div>
      );
  
  }
  }

export default Header;
