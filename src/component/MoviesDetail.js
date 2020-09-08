import React, { Component } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import HeaderDesing from "./HeaderDesing";
import FooterDesing from "./FooterDesing";
import { Container, Grid, Image, Icon, Label, Table } from "semantic-ui-react";

class MoviesDetail extends Component {
  state = {
    detail: [],
  };
  
  render() {
    return (
      <div style={{ marginBottom: "7em" }}>
        <HeaderDesing />
        <Container text style={{ marginTop: "5em" }}>
         <center><h2>Film Hakkında Bilgiler</h2> </center> 
          <Grid>
            <Grid.Row columns={3}>
              <Grid.Column>
                <h3>{this.state.detail.Title}</h3>
              </Grid.Column>
              <Grid.Column>
                <Icon
                  disabled
                  name="star"
                  color="yellow"
                  size="large"
                  id="StarImdb"
                />
              </Grid.Column>
              <Grid.Column>
                <h3> {this.state.detail.imdbRating}</h3>
              </Grid.Column>
            </Grid.Row>

            <Grid.Row columns={3} style={{ height: "50px" }}>
              <Grid.Column>
                <Label style={{ position: "relative", bottom: "20px" }}>
                  <Icon name="clock outline" color="red" size="large" />{" "}
                  {this.state.detail.Runtime}
                </Label>
              </Grid.Column>
              <Grid.Column>
                <Label style={{ position: "relative", bottom: "20px" }}>
                  <Icon name="calendar alternate" color="red" size="large" />
                  {this.state.detail.Year}
                </Label>
              </Grid.Column>
              <Grid.Column>
                <Label style={{ position: "relative", bottom: "20px" }}>
                  <Icon name="film" color="red" size="large" />{" "}
                  {this.state.detail.Genre}
                </Label>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={2}>
              <Grid.Column>     
                <center>
                  <Image
                    src={this.state.detail.Poster}
                    style={{ width: "300px", height: "400px" }}
                  />
                </center>
              </Grid.Column>
              <Grid.Column>     
              <Table className="TableBorder">
                  <Table.Body>
                    <Table.Row>
                      <Table.Cell style={{ fontWeight: "bold" }}>
                        Yönetmen:
                      </Table.Cell>
                      <Table.Cell>{this.state.detail.Director}</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell style={{ fontWeight: "bold" }}>
                        Oyuncular:
                      </Table.Cell>
                      <Table.Cell> {this.state.detail.Actors}</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell style={{ fontWeight: "bold" }}>
                        Kısa Açıklama:
                      </Table.Cell>
                      <Table.Cell>{this.state.detail.Plot}</Table.Cell>
                    </Table.Row>
                  </Table.Body>
                </Table>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
        <FooterDesing />
      </div>
    );
  }
}
export default withRouter(MoviesDetail);
