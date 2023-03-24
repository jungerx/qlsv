import React, { Component } from 'react';

class StudentCreatePage extends Component {
    render() {
        return (
           <div>
  <h1>Thêm sinh viên</h1>
  <form action="list.html" method="POST">
    <div className="container">
      <div className="row">
        <div className="col-md-5">
          <div className="form-group">
            <label>Tên</label>
            <input type="text" className="form-control" placeholder="Tên của bạn" required name="name" />
          </div>
          <div className="form-group">
            <label>Birthday</label>
            <input type="date" className="form-control" placeholder="Ngày sinh của bạn" required name="birthday" />
          </div>
          <div className="form-group">
            <label>Chọn Giới tính</label>
            <select className="form-control" id="gender" name="gender" required>
              <option value="nam">Nam</option>
              <option value="nữ">Nữ</option>
              <option value="khác">Khác</option>
            </select>
          </div>
          <div className="form-group">
            <button className="btn btn-success" type="submit">Lưu</button>
          </div>
        </div>
      </div>
    </div>
  </form>
</div>

        );
    }
}

export default StudentCreatePage;