import React from 'react'
import Search from '../../components/Search'
import { Link } from 'react-router-dom'
import StudentList from '../../components/Student/StudentList'
const StudentHomePage = () => {
  return (
    <div>
        <h1>Danh sách sinh viên</h1>
        <Link to="/student/create" className="btn btn-info">Add</Link>
       <Search/>
       <StudentList/>
    </div>
  )
}

export default StudentHomePage