import React from "react";
const Profile = (props) => {
    return (
        <div id="profilePerson" className="row justify-content-center col-6 mx-auto">
            <h1 className="text-center mx-auto">{props.fullName}</h1>
            <h2 className="text-center mx-auto">{props.profession}</h2>
            <img className="text-center mx-auto" src={props.imgSrc} alt=""/>
            <p className="text-center">{props.bio}</p>
        </div>
    );
}
export default Profile;
// import React from 'react'
// class Profile extends React.Component {
// state ={}      
//   render() {
//     return 
//     (
//         <div id="profilePerson" className="row justify-content-center col-6 mx-auto">
//             <h1 className="text-center mx-auto">{this.props.fullName}</h1>
//             <h2 className="text-center mx-auto">{this.props.profession}</h2>
//             <img className="text-center mx-auto" src={this.props.imgSrc} alt=""/>
//             <p className="text-center">{this.props.bio}</p>
//         </div>
//     );
//   }
// }

// export default Profile;