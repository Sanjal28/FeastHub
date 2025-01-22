import React from "react";
import { UserClass }from "./userClass";



class About extends React.Component{
  constructor(props){
    super(props);
    console.log("parent constructor")
  }
  componentDidMount(){
    
    console.log("parent componentDidMount")
  }
  render(){
    console.log("parent render")
    return(
      <div>
      <h1 className=" font-bold text-2xl text-center">About US</h1>
      <h2 className="text-center m-3">First food ordering application solely made for learning</h2>
      <UserClass />
      {/* <User name={"Sanjal"} location={"Erode"}/> */}

     </div>
    )
  }
}

// const About = () => {
//   return (
//     <div>
//       <h1>About US</h1>
//       <h2>First food ordering application solely made for learning</h2>
//       <UserClass name={"Sanjal"} location={"Erode"}/>
//       {/* <User name={"Sanjal"} location={"Erode"}/> */}
//      </div>
//   );
// };

export default About;
