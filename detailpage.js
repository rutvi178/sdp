import React,  { Component } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { Button } from 'reactstrap';
import  { Redirect } from 'react-router-dom';
//import Form3 from './form3';


  class Detailpage extends Component{
 
    constructor(props) {
        super(props);
      
   this.state={
      eventname:'',
      time:'',
      date: new Date(),
      location:'',
      contact_details:'',
      description:'',
      amount:'',
      req_participant:''

   };
  // this.rowCallback= this.rowCallback.bind(this);
      //  this.state = {events: []};
       
    }

    componentDidMount() {
        axios.get('http://localhost:5000/routes/event/'+this.props.match.params.id)
        
          .then(response => {
          
            this.setState({ 
              eventname: response.data.eventname,
              time: response.data.time,
              date: response.data.date,
              location : response.data.location,
              contact_details: response.data.contact_details,
              description: response.data.description,
              amount:response.data.amount,
              req_participant:response.data.req_participant,
             })
            
          })
          .catch((error) => {
            console.log(error);
          })
      }
    
      check() {
      
        // if(this.req_participant === 3){
         //  <Link to="/form3"> </Link>
        // }
      }
    
 //  eventList() {
      //  return this.state.event{
   //  return <Event key={this.props._id}/>;
       //   }
       // })
    //  }
    render(){
      let id = this.props.match.params.id;
      console.log(id);
      const ename = this.state.eventname;
      const etime =this.state.time;
      const edate= this.state.date;
      const data = {ename,etime,edate};
      console.log(data);

  //    <Form3 ename={this.state.eventname}/>
    //let dataevent=[{this.state.eventname,time,date}]
        return (
          
            <div >
            <h3></h3>
            <table className="table  ">
              <thead className="table-info">
               
                  
                  <tr>CONTACT DETAILS  </tr>  
                     <td>  <tr>{this.state.contact_details}</tr>   </td>

                  <tr>DESCRIPTION</tr>
                     <td>   <tr>{this.state.description}</tr>   </td>
                  <tr>AMOUNT</tr>
                      <td>  <tr>{this.state.amount}</tr></td>
                  <tr>REQUIRED PARTICIPANTS</tr>
                   <td>  <tr>{this.state.req_participant}</tr></td>
                
          
           
              </thead>
         
            </table>
            <Link to ={{pathname:"/register3" , data:  data  }}>
        
            <Button  size="lg"  color ="dark" onClick={this.check}> Register </Button>
            </Link>

          </div>   
        );
    }
  }
  export default Detailpage;