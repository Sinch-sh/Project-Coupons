import React, { Component } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import service from "../service";

import UserService from "../services/user.service";
import EventBus from "../common/EventBus";

/* export default class BoardAdmin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: ""
    };
  }

  componentDidMount() {
    UserService.getAdminBoard().then(
      response => {
        this.setState({
          content: response.data
        });
      },
      error => {
        this.setState({
          content:
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString()
        });

        if (error.response && error.response.status === 401) {
          EventBus.dispatch("logout");
        }
      }
    );
  }

  render() {
    return (
      <div className="container">
        <header className="jumbotron">
          <h3>{this.state.content}</h3>
        </header>
      </div>
    );
  }
}
 */
function BoardAdmin()
{
  
 const [allcustomer,setAllcustomer] = useState([]);
 const fecthdata = () =>
 {
     service.admingetcustomer()
     .then((responsecust) => {
         setAllcustomer(responsecust.data)
     }).catch((error) => {
         console.log(error)
     })
 }
 useEffect(() => {
  fecthdata();
  console.log(allcustomer);
}, []);
return(
  <div>
  <br></br>
  <br></br>
  <br></br>
  <center><table border="3">

  <tbody>
  {
    allcustomer.map((customer,index)=>(
      <tr>
      <td>{customer.customer_id}</td>
      <td>{customer.customer_id}</td>
      <td>{customer.username}</td>
      <td>{customer.customer_location}</td>
      <td>{customer.customer_email}</td>
      <td>{customer.customer_password}</td>
      </tr>
    ))
  }
  </tbody>
  </table>
  </center> 
    
  </div>
)
}
export default BoardAdmin;