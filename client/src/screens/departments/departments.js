import React from 'react'
import Axios from 'axios';
import { Link } from 'react-router-dom';

//class example
export default class Departments extends React.Component {
  state = {departments: []};

  async componentDidMount(){
    console.log('mounted do api call here');
    const res = await Axios.get("/api/departments");

    this.setState({
      departments: res.data,
    });
  }

  renderDepartments() {
    console.log("called");
    return this.state.departments.map( (d) => (
      <div>
        <Link to={`/departments/${d.id}`} key={d.id}>
          name: {d.name}
        </Link>
      </div>
    ));
  }

  render() {
    return (
      <div>
        <h1>departments</h1>
        {this.renderDepartments()}
      </div>
    );
  }
}