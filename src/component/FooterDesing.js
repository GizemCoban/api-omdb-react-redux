import React, { Component } from "react";
import {
  List,
  Segment,
} from "semantic-ui-react";

class FooterDesing extends Component {
  render() {
    return (
        <Segment
          inverted
          vertical
          style={{
            padding: "0.7em 0em",
            width: "100%",
            position: "fixed",
            bottom: "0px",
          }}
        >
          <List horizontal inverted divided link size="small"></List>
          <center> <p >
            Gizem ÇOBAN tarafından Yapılmıştır. OMDB Movies ©2020 Her Hakkı
            Saklıdır.
          </p></center>
          <center>
          <a href="https://github.com/GizemCoban">
            <i className="github square icon big"></i>
          </a>
          <a href="https://twitter.com/Gizemm_Cobann">
            <i className="twitter square icon big"></i>
          </a>
          <a href="https://www.linkedin.com/in/gizemmcobann/">
            <i className="linkedin square icon big"></i>
          </a>

          </center>

        </Segment>
    );
  }
}
export default FooterDesing;
