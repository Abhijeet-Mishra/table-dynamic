import React, { Component } from "react";
import ReactDOM from "react-dom";

class Table extends Component {
  addNewdata = () => {
    this.props.openOverlay();
  };
  handleDelete = i => {
    this.props.deleteData(i);
  };

  handleEdit = i => {
    this.props.handleEdit(i);
  };

  render() {
    let data = this.props.data;

    const specific = data.map((item, i) => {
      return (
        <tr>
          <td>
            <button onClick={() => this.handleEdit(i)}>Edit</button>
            <button onClick={() => this.handleDelete(i)}>Delete</button>
          </td>
          <td>{item.firstname}</td>
          <td>{item.lastname}</td>
          <td>{item.age}</td>
          <td>{item.gender}</td>
          <td>{item.doj}</td>
        </tr>
      );
    });

    return (
      <div>
        <table className="table-container">
          <th>Action</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Age</th>
          <th>Gender</th>
          <th>Joining Date</th>
          <tbody>{specific}</tbody>
        </table>
        <button onClick={this.addNewdata}>Add row</button>
      </div>
    );
  }
}

export default Table;
