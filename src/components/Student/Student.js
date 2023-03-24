import React from 'react'

const Student = (props) => {
    // console.log(props.data)
    return (
        <tr>
            <td>{props.order}</td>
            <td>{props.data.id}</td>
            <td>{props.data.name}</td>
            <td>{props.data.birthday}</td>
            <td>{props.data.gender}</td>
            <td><a className='btn btn-warning btn-sm' href={`/student/${props.data.id}/edit`}>Sửa</a></td>
            <td><a data={1} className="btn btn-danger btn-sm" href="list.html" type="student">Xóa</a></td>
        </tr>
    )
}

export default Student