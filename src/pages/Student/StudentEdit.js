import React from 'react'
import { useFormik } from 'formik'
import *as Yup from 'yup'
import { useState } from 'react'
import Message from '../../components/Message'
const StudentEdit = () => {
    const [message, setMessage] = useState(null);
    const [isError, setIsError] = useState(false);



    const formik = useFormik({
        initialValues: {
            name: '',
            birthday: '',
            gender: '',
        },
        validationSchema: Yup.object(
            {
                name: Yup.string().required('Vui long nhap day du thong tin'),
                birthday: Yup.string().required('Vui long nhap day du thong tin'),
                gender: Yup.string().required('Vui long nhap day du thong tin'),
            }
        ),
        onSubmit: values => handleSubmitForm(values)
        //  {
        //     alert(JSON.stringify(values, null, 2));
        // },
    });
    const handleSubmitForm = (data) => {
     
    }
    return (
        <div>
            {message ? <Message isError={isError}>{message}</Message> : ""}
            <h1>Chỉnh sửa sinh viên</h1>
            <form onSubmit={formik.handleSubmit} method="POST">
                <input type="hidden" name="id" defaultValue={1} />
                <div className="container">
                    <div className="row">
                        <div className="col-md-5">
                            <div className="form-group">
                                <label>Tên</label>
                                <input type="text"
                                className="form-control"
                                placeholder="Tên của bạn" 
                                name="name" 
                                value='' />
                            </div>
                            <div className="form-group">
                                <label>Birthday</label>
                                <input type="date"
                                className="form-control"
                                placeholder="Ngày sinh của bạn"
                                name="birthday"
                                value='' />
                            </div>
                            <div className="form-group">
                                <label>Chọn Giới tính</label>
                                <select 
                                className="form-control"
                                id="gender"
                                name="gender" 
                                  >
                                    <option value="">---</option>
                                    <option value='nam'>Nam</option>
                                    <option value='nữ'>Nữ</option>
                                    <option value='khác'>Khác</option>
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
    )
}

export default StudentEdit;