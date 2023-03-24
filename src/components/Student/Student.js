import React from 'react'

const Student = () => {
    return (
        <tr>
            <td>1</td>
            <td>1</td>
            <td>Nguyễn Thị Bé Bảy</td>
            <td>09/03/2000</td>
            <td>nữ</td>
            <td><a href="edit.html">Sửa</a></td>
            <td><a data={1} className="delete" href="list.html" type="student">Xóa</a></td>
        </tr>
    )
}

export default Student