import { Component } from "react";
import { GITHUB_API } from "../../utils/img";
// import { useState } from "react";

export class UserClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // we can declare n number of state var in this big object
      count1: 0,
      userinfo: {
        name:"",
        location:"India",
      }
    };
    console.log(this.props.name +"Child constructor");
  }
  async componentDidMount(){
    const data=await fetch(GITHUB_API)
    const json=await data.json()
    console.log(json)
    this.setState({
      userinfo: json
    })
    this.timer=setInterval(()=>{
      console.log("hi")
    },1000)
    console.log(this.props.name +"child componentDidMount")
  }
  componentDidUpdate(){
    console.log("component did update")
  }
  componentWillUnmount(){
    clearInterval(this.timer)
    console.log("componentWillUnmount")
  }
  render() {
    const { count1 } = this.state; //destructure
    console.log(this.props.name +"Child render");
    return (
      <div className="user-box m-6/12 bg-gray-100">
        <h2>Name : {this.state.userinfo.name}(class comp)</h2>
        <h3>Location : {this.state.userinfo.location}</h3>
        <h4>Contact : sanjal@gmail.com</h4>
        <img src={this.state.userinfo.avatar_url} className="img_about w-[200px]"></img>
        <h5>count:{count1}</h5>
        <button
          onClick={() => {
            this.setState({
              count1: count1 + 1,
            });
          }}
        >
          Count Increase
        </button>
      </div>
    );
  }
}

// functional component
// export const User = (props) => {
//   const [counts1] = useState(0);
//   const [counts2] = useState(1);
//   return (
//     <div className="user-box">
//       <h2>Name :{props.name}(functional comp)</h2>
//       <h3>Location : {props.location}</h3>
//       <h4>Contact : sanjal@gmail.com</h4>
//       <h5>count:{counts1}</h5>
//       <h5>count:{counts2}</h5>
//     </div>
//   );
// };
