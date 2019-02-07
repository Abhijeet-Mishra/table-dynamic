import React, { Component } from "react";
import ReactDOM from "react-dom";
import Table from "./components/Table";
import Overlay from "./components/Overlay";
import "./styles.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      showOverlay: false,
      editMode: false,
      currentObj: {},
      currObjIndex: 0,
      data: [
        {
          firstname: "xxx",
          lastname: "yyy",
          age: "30",
          gender: "male",
          doj: "2018-08-10"
        },
        {
          firstname: "zzz",
          lastname: "yyy",
          age: "20",
          gender: "female",
          doj: "2018-12-10"
        }
      ]
    };
  }

  handleData = obj => {
    this.state.data.push(obj);
    this.setState({ showOverlay: false });
  };
  openOverlay = () => {
    this.setState({ showOverlay: true, currentObj: {} });
  };
  closeOverlay = () => {
    this.setState({ showOverlay: false, editMode: false });
  };
  deleteData = i => {
    this.state.data.splice(i, 1);
    this.setState({});
  };

  handleEdit = i => {
    this.openOverlay();
    this.setState({
      currentObj: this.state.data[i],
      editMode: true,
      currObjIndex: i
    });
  };

  addUpdatedData = dataObj => {
    this.state.data.splice(this.state.currObjIndex, 1, dataObj);
    this.setState({ showOverlay: false });
  };
  render() {
    return (
      <div className="main-app-container">
        <Table
          handleEdit={i => this.handleEdit(i)}
          deleteData={i => {
            this.deleteData(i);
          }}
          data={this.state.data}
          openOverlay={this.openOverlay}
        />
        {this.state.showOverlay ? (
          <Overlay
            addUpdatedData={data => {
              this.addUpdatedData(data);
            }}
            editMode={this.state.editMode}
            closeOverlay={this.closeOverlay}
            currentObj={this.state.currentObj}
            addData={obj => {
              this.handleData(obj);
            }}
          />
        ) : (
          ""
        )}
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
