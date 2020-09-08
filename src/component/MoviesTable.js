import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { Table } from "semantic-ui-react";
class MoviesTable extends Component {
  render() {
    return (
        <Table.Row>
          <Table.Cell>{this.props.obj.imdbID}</Table.Cell>
          <Table.Cell>
            <Link to={"/detail/"+this.props.obj.imdbID}  >{this.props.obj.Title}</Link>
          </Table.Cell>
          <Table.Cell>{this.props.obj.Year}</Table.Cell>
        </Table.Row>    
    );
  }
}
export default withRouter(MoviesTable);
