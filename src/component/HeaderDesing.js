import React, { Component } from "react";
import {Container,Menu,} from "semantic-ui-react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { browserHistory } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

class HeaderDesing extends Component {
  render() {
    return (
        <Menu fixed="top" inverted>
          <Container>
            <Menu.Item  header>
              OMDB Movies
            </Menu.Item>
            <Menu.Item><Link to="/">Anasayfa </Link></Menu.Item>
          </Container>
        </Menu>     
    );
  }
}
export default withRouter(HeaderDesing);
