import Profile from "./ProfileClass";
import React from "react";
import userContext from "../utils/Usercontext";

class AboutUs extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent-Constructor");
  }
  componentDidMount() {
    console.log("Parent-Component");
    this.timer = setInterval(() => {
      console.log("pressed");
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timer);
    console.log("Component Unmounted");
  }
  render() {
    console.log("Parent-Render");
    return (
      <div>
        <h1>About us</h1>
        <userContext.Consumer>
          {({ user }) => (
            <>
            <h3> name-{user.name} </h3>
            <h3> email-{user.email} </h3>
            </>
          )}
        </userContext.Consumer>
      </div>
    );
  }
}

export default AboutUs;
