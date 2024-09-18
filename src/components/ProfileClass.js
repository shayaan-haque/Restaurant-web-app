import React from "react";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count2: 1,
    };
    console.log("Child Constructor" + this.props.name);
  }
  componentDidMount() {
    console.log("Child-Component" + this.props.name);
  }

  render() {
    console.log("Child-Render" + this.props.name);
    return (
      <div>
        <h1>Class Component</h1>
        <h2>Name:{this.props.name}</h2>
        <h2>Name:{this.props.xyz}</h2>
        <button
          onClick={() =>
            (this.setState = {
              count: 1,
              count2: 2,
            })
          }
        ></button>
      </div>
    );
  }
}

export default Profile;
