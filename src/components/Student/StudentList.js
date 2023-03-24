import Student from './Student'
import React, { Component } from 'react';

class StudentList extends Component {
  constructor(props){
    super(props);
    this.state={studentList: []};

  }
  componentDidMount(){
    fetch("https://641d2df41a68dc9e4618835b.mockapi.io/api/v1/students")
    .then((result)=>result.json())
    .then((result)=>this.setState({studentList:result}))
    .catch((error)=> console.log(error));
  }
  render() {
    const {studentList}=this.state;
    console.log(studentList)
    return (
      <div>
          <table className="table table-hover">
        <thead>
          <tr>
            <th>#</th>
            <th>Mã SV</th>
            <th>Tên</th>
            <th>Ngày Sinh</th>
            <th>Giới Tính</th>
            <th />
            <th />
          </tr>
        </thead>
        <tbody>
          <Student />
          <Student />
          <Student />
        </tbody>
      </table>
      <div>
        <span>Số lượng: 3</span>
      </div>
      </div>
    );
  }
}

export default StudentList;
