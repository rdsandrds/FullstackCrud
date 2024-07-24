import React, { Component } from "react";
import EmployeeService from "../services/EmployeeService";
import withRouter from "./withRouter";

class UpdateEmployeeComponent extends Component {
  constructor(props) {
    super(props);
    const { params, location, navigate } = this.props;

    this.state = {
      id: this.props.params,
      firstName: "",
      lastName: "",
      emailId: ""
     
    };
    console.log(this.state.id);

    this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
    this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
    this.updateEmployee = this.updateEmployee.bind(this);
    //  this.changeEmailIdHandler = this.changeEmailIdHandler.bind(this);

  }

 

  componentDidMount() {
    const obj = this.state.id;
    console.log(obj);
    EmployeeService.getEmployeeById(obj.id).then((res) => {
      let employee = res.data;
      this.setState({
        firstName: employee.firstName,
        lastName: employee.lastName,
        emailId: employee.emailId,
      });
    });
  }

  updateEmployee = (e) => {
    e.preventDefault();
    const obj = this.state.id;
    let employee = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      emailId: this.state.emailId,
    };
    console.log("emoloyee => " + JSON.stringify(employee));
    // console.log('id=>' + JSON.stringify(this.state.id));

    EmployeeService.updateEmployee(employee, obj.id).then((res) => {
        console.log(res.data);
        this.props.navigate('/employees');
        
    });
   
  };

  changeFirstNameHandler = (event) => {
    this.setState({ firstName: event.target.value });
  };
  changeLastNameHandler = (event) => {
    this.setState({ lastName: event.target.value });
  };

  changeEmailIdHandler = (event) => {
    this.setState({ emailId: event.target.value });
  };

  cancel() {
    this.props.history.push("/employees");
  }

  render() {
    return (
      <div>
        <br></br>
        <div className="container">
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
              <h3 className="text-center"> Update Employee Data</h3>
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label> First Name: </label>
                    <input
                      placeholder="First Name"
                      name="firstName"
                      className="form-control"
                      value={this.state.firstName}
                      onChange={this.changeFirstNameHandler}
                    ></input>
                  </div>

                  <div className="form-group">
                    <label> Last Name: </label>
                    <input
                      placeholder="Last Name"
                      name="lastName"
                      className="form-control"
                      value={this.state.lastName}
                      onChange={this.changeLastNameHandler}
                    />
                  </div>

                  <div className="form-group">
                    <label> Email Address : </label>
                    <input
                      placeholder="Email Address "
                      name="emailId"
                      className="form-control"
                      value={this.state.emailId}
                      onChange={this.changeEmailIdHandler}
                    />
                  </div>

                  <button
                    className="btn btn-success"
                    onClick={this.updateEmployee}
                  >
                    Keep Updated
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={this.cancel.bind(this)}
                    style={{ marginLeft: "10px" }}
                  >
                    Cancel
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(UpdateEmployeeComponent);
