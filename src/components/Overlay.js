import React, { Component } from "react";
import ReactDOM from "react-dom";

class Overlay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        firstname: this.props.currentObj.firstname,
        lastname: this.props.currentObj.lastname,
        age: this.props.currentObj.age,
        gender: this.props.currentObj.gender,
        doj: this.props.currentObj.doj
      }
    };
  }

  handleOnChane = e => {
    // let data = { [e.target.name]: e.target.value }}
    this.setState({
      data: { ...this.state.data, [e.target.name]: e.target.value }
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.addData(this.state.data);
  };
  handleCancel = () => {
    this.props.closeOverlay();
  };
  handleUpdate = e => {
    e.preventDefault();
    this.props.addUpdatedData(this.state.data);
  };

  render() {
    return (
      <div className="overlay-container">
        <form>
          <label>{"first Name"}</label>
          <input
            type="text"
            name="firstname"
            onChange={this.handleOnChane}
            value={this.state.data.firstname}
          />{" "}
          <br />
          <br />
          <label>{"last Name"}</label>{" "}
          <input
            type="text"
            name="lastname"
            onChange={this.handleOnChane}
            value={this.state.data.lastname}
          />
          <br />
          <br />
          <label>{"Age"}</label>
          <input
            type="number"
            name="age"
            onChange={this.handleOnChane}
            value={this.state.data.age}
          />
          <br />
          <br />
          <label>{"Gender"}</label>
          <input
            type="radio"
            name="gender"
            onChange={this.handleOnChane}
            value={"male"}
          />
          male
          <input
            type="radio"
            name="gender"
            onChange={this.handleOnChane}
            value={"female"}
          />
          female <br />
          <br />
          <label>{"Date of Joining"}</label>{" "}
          <input
            type="date"
            name="doj"
            onChange={this.handleOnChane}
            value={this.state.data.doj}
          />
          <br />
          <br />
          <br />
          <br />
          {this.props.editMode ? (
            <button onClick={this.handleUpdate}>{"Update"}</button>
          ) : (
            <button onClick={this.handleSubmit}>{"Submit"}</button>
          )}
          <button onClick={this.handleCancel}>{"Cancel"}</button>
        </form>
      </div>
    );
  }
}

export default Overlay;
