import React, { Component } from "react";
import EmployeeService from "../services/EmployeeService";
import { Link } from "react-router-dom";
import withRouter from "./withRouter";

class ListEmployeeComponents extends Component {
  constructor(props) {
    super(props);

    this.state = {
      employees: [],
    };
    this.addEmployee = this.addEmployee.bind(this);
    this.editEmployee = this.editEmployee.bind(this);
    this.deleteEmployee = this.deleteEmployee.bind(this);
   
  }

  addEmployee() {
    this.props.history.push("/add-employee");
  }

  editEmployee(id) {
    this.props.history.push(`/update-employee/${id}`);
  }

  deleteEmployee(id) {
    console.log(id);
    EmployeeService.deleteEmployee(id).then((res) => {
      this.setState({
        employees: this.state.employees.filter(
          (employee) => employee.id !== id
        ),
      });
    });
  }

  viewEmployee(id) {
    this.props.history.push(`/view-employee/${id}`);
  }
  /**
   * ReactJS and SpringBoot integation , and represent data on the browser from DB.
   * HTTP axois.
   */
  componentDidMount() {
    EmployeeService.getEmployees().then((res) => {
      this.setState({ employees: res.data });
      console.log(res.data);
      
    });
  }
  
  render() {
    return (
      <div>
        <h2 className="text-center"> Employee List in My Company</h2>
        <div className="row">
        {/* <Link to={`/edit/${product.id}`} className="mr-5 py-2 px-3 border rounded border-blue-200 text-blue-300">
          Edit
        </Link> */}
          <Link to={`/add-employee`} className="btn btn-primary" >
            {" "}
            Add Employee{" "}
          </Link>
        </div>
        <br></br>

        <div className="row">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>First Name: </th>
                <th>Last Name: </th>
                <th>Email ID: </th>
                <th> Actions</th>
              </tr>
            </thead>

            <tbody>
              {this.state.employees.map((employee) => (
                <tr key={employee.id}>
                  <td> {employee.firstName} </td>
                  <td> {employee.lastName} </td>
                  <td> {employee.emailId} </td>
                  <td>
                    <Link
                      to={`/update-employee/${employee.id}`}
                      className="btn btn-info"
                    >
                      {" "}
                      Update
                    </Link>
                    <Link onClick={ () => this.deleteEmployee(employee.id)} 
                      style={{ marginLeft: "10px" }}
                     
                      className="btn btn-danger"
                    >
                      Delete{" "}
                    </Link>
                    <Link
                      style={{ marginLeft: "10px" }}
                      to={`/view-employee/${employee.id}`}
                      className="btn btn-info"
                    >
                      View{" "}
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default withRouter(ListEmployeeComponents);
