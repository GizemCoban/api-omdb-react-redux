import React from "react";
import MoviesList from './MoviesList';
import HeaderDesign from "./HeaderDesing";
import FooterDesing from "./FooterDesing";
class Home extends React.Component {
  render() {
    return (
      <div>
        <HeaderDesign />
        
           <MoviesList/> 
        <div style={{ marginTop: "7em" }} >
        <FooterDesing />

        </div>

        
      </div>
    );
  }
}

export default Home;
