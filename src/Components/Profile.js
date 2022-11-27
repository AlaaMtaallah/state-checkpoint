
import React from 'react'
class Profile extends React.Component {   
  state = { count: 0 };
  componentDidMount() {
     setInterval(() => {
      this.setState(prevState => {
        return {
          count: prevState.count + 1,
        };
      });
    }, 1000);
  }
  componentWillUnmount(){
    clearInterval();
  }
  render() {
    return(
    <div id="profilePerson" className="row justify-content-center col-6 mx-auto">
            <h1 className="text-center mx-auto">{this.props.fullName}</h1>
            <h2 className="text-center mx-auto">{this.props.profession}</h2>
            <img className="text-center mx-auto" src={this.props.imgSrc} alt=""/>
            <p className="text-center">{this.props.bio}</p>
            <h4>The Profile has been rendered for {this.state.count} seconds</h4>
        </div>
        );
  };
}

export default Profile;