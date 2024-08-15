import React, { Component } from "react";
import TableRow from "./TableRow";

interface Props {}
interface State {}

export default class Table extends Component<Props, State> {
  state = {};

  render() {
    return (
      <table id="applications-table">
        <tbody>
          <tr>
            <th>#</th>
            <th>Company</th>
            <th>Position</th>
            <th>Location</th>
            <th>Method</th>
            <th>Cover Letter</th>
            <th>Date</th>
            <th>Notes</th>
            <th>Status</th>
          </tr>
          <TableRow/>
        </tbody>
      </table>
    );
  }
}
