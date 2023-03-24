import Student from './Student'
import React, { Component } from 'react';

class StudentList extends Component {
  constructor(props){
    super(props);
    this.state={studentList: [], isLoaded:false , error:null};

  }
  componentDidMount(){
    fetch("https://641d2df41a68dc9e4618835b.mockapi.io/api/v1/students")
    .then((result)=>result.json())
    .then((result)=>this.setState({studentList:result ,isLoaded:true}))
    .catch((error)=> this.setState({error:error ,isLoaded:true}));
  }
  render() {
    const {studentList,isLoaded,error}=this.state;
    if(!isLoaded){
      return <div className='text-success mb-3'>
        Loading ...
      </div>
    }
    else if(error){
      return <div className='text-danger mb-3'>
      {error}
    </div>
    }
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
          {studentList.map((objStudent,index)=>{
            return(<Student key={index} data={objStudent} order={index+1}/>);
          })}
        </tbody>
      </table>
      <div>
        <span>Số lượng: {studentList.length}</span>
      </div>
      </div>
    );
  }
}

export default StudentList;
