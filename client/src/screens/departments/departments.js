import React from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

export default class Department extends React.Component {
  state = { departments: [] };

  async componentDidMount() {
    console.log("mounted do api call here");
    const res = await Axios.get("/api/departments");

    this.setState({
      departments: res.data,
    });

    // Axios.get('/api/departments').then(res => {
    // this.setState({
    //   departments:res.data
    // })
    // })
  }

  renderDepartments() {
    return this.state.departments.map((department) => (
      <div>
        <Link to={`/departments/${department.id}`} key={department.id}>
          name: {department.name}
        </Link>
      </div>
    ));
  }

  render() {
    return (
      <div>
        <h1>Departments</h1>
        {this.renderDepartments()}
      </div>
    );
  }
}