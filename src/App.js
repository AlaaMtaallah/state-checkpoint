import React from "react";
import Profile from "./Components/Profile";
class App extends React.Component {
  // constructor(props) {
  //   super(props);  
  //   this.handleClick = this.handleClick.bind(this);  
  // }

  state={
    Person : { 
      fullName:"Alaa Mtaallah", 
      bio:`A software developer specialized in Dotnet, I have nearly 2 years of experience, at this time i'm looking to improve my skills and find a better opportunities.
      Best Regards :)`, 
      imgSrc :"../af.png", 
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
    const isshown = this.state.shows;
    let profile;
    if (isshown) {
      profile = <Profile fullName={this.state.Person.fullName} profession={this.state.Person.profession} imgSrc={this.state.Person.imgSrc} bio={this.state.Person.bio}></Profile>;
    } else {
      profile = <div></div>;
    }
    return (
      <>
        <div className="container my-5 py-5">
          <div className="row justify-content-center">
            <button className="col-2 btn btn-success mx-2" onClick={this.handleClick}>Click Me</button>
          </div>
          {profile}
        </div>
      </>

    );
  }
}

export default App;
