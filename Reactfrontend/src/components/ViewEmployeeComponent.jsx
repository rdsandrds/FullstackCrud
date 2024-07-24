import React, { Component } from "react";
import EmployeeService from "../services/EmployeeService";
import withRouter from "./withRouter";

class ViewEmployeeComponent extends Component {
  constructor(props) {
    super(props);
    const { params, location, navigate } = this.props;


    this.state = {
      id: this.props.params,
      employee: {},
    };
  }

  componentDidMount() {
    const obj = this.state.id;
    // console.log(obj);
    EmployeeService.getEmployeeById(obj.id).then((res) => {
      this.setState({ employee: res.data });
    });
    // console.log(this.state.employee);
  }

  render() {
    return (
      <div>
        <br></br>
        <div className="card col-md-6 offset-md-3">
          <h3 className="text-center"> Individual Employee Details</h3>
          <div className="card-body">
            <div className="row">
              <label>
                {" "}
                <b>First Name: </b>{" "}
              </label>
              <div> {this.state.employee.firstName}</div>
            </div>
            <div className="row">
              <label>
                {" "}
                <b>Last Name: </b>{" "}
              </label>
              <div> {this.state.employee.lastName}</div>
            </div>
            <div className="row">
              <label>
                {" "}
                <b> Email ID: </b>{" "}
              </label>
              <div> {this.state.employee.emailId}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default  withRouter(ViewEmployeeComponent);;
