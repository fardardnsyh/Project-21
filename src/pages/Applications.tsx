import React, { Component } from "react";
import NavBar from "../components/NavBar";
import Table from "../components/Table";
import ApplicationForm from "../components/ApplicationForm";
import SearchBox from "../components/SearchBox";

interface Props {}
interface State {applications: Array<string>}

const BASE_URL = "http://localhost:3000";

export default class Applications extends Component<Props, State> {
  state = { applications: [] };

  componentDidMount() {
    fetch(BASE_URL + "/applications")
      .then((resp) => resp.json())
      .then((json) => this.setState({ applications: json }));
  }

  componentDidUpdate() {
    console.log(this.state.applications);
  }

  render() {
    const applications = this.state.applications
    return (
      <>
        <NavBar />
        <h1 className="page-header">Add Application</h1>
        <ApplicationForm />
        <h1 className="page-header">Applications</h1>
        <SearchBox />
        <Table {...applications}/>
      </>
    );
  }
}
