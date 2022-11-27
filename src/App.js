import React from "react";
import Profile from "./Components/Profile";
class App extends React.Component {

  state={
    Person : { 
      fullName:"Alaa Mtaallah", 
      bio:`A software developer specialized in Dotnet, I have nearly 2 years of experience, at this time i'm looking to improve my skills and find a better opportunities.
      Best Regards :)`, 
      imgSrc :"../im-2.jpg", 
      profession:"Dotnet Developer"
    },
    shows : false
  };

  handleClick=()=>{
    this.setState(state => ({
      shows: !state.shows
    }), () => console.log(this.state) );
  }
  render() {
    return (
      <>
        <div className="container my-5 py-5">
          <div className="row justify-content-center">
            <button className="col-2 btn btn-success mx-2" onClick={this.handleClick}>Click Me</button>
          </div>
          {this.state.shows ? <Profile fullName={this.state.Person.fullName} profession={this.state.Person.profession} imgSrc={this.state.Person.imgSrc} bio={this.state.Person.bio}></Profile> : <></>}
          <h2></h2>
        </div>
      </>

    );
  }
}

export default App;
