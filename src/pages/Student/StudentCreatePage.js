import React from 'react'
import { useFormik } from 'formik'
import *as Yup from 'yup'
import {useState} from 'react'
import Message from '../../components/Message'
const StudentCreatePage = () => {
    const [message,setMessage]=useState(null);
    const [isError,setIsError]=useState(false);



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
    const handleSubmitForm=(data)=>{
        setMessage('Đang xử lý ...')
        // alert(JSON.stringify(data, null, 2));
        // call api
        fetch("https://641d2df41a68dc9e4618835b.mockapi.io/api/v1/students",{
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
        .then((res)=>{
            setMessage("Đã tạo thành công");
            setIsError(false);
        })
        .catch((error)=> {
            setMessage(error);
            setIsError(true);
        });
    }
    return (
        <div>
            {message? <Message isError={isError}>{message}</Message>:""}
            <h1>Thêm sinh viên</h1>

            <form onSubmit={formik.handleSubmit} method="POST">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5">
                            <div className="form-group">
                                <label>Tên</label>
                                <input type="text"
                                    className="form-control"
                                    placeholder="Tên của bạn"
                                    name="name"
                                    onChange={formik.handleChange}
                                    value={formik.values.name} />
                                    <span className='error'> {formik.errors.name && formik.touched.name && (
                                    <div>{formik.errors.name}</div>
                                ) }</span>
                               
                            </div>
                            <div className="form-group">
                                <label>Birthday</label>
                                <input type="date"
                                    className="form-control"
                                    placeholder="Ngày sinh của bạn"
                                    name="birthday"
                                    onChange={formik.handleChange}
                                    value={formik.values.birthday} />
                                     <span className='error'> {formik.errors.birthday && formik.touched.birthday && (
                                    <div>{formik.errors.birthday}</div>
                                ) }</span>
                            </div>
                            <div className="form-group">
                                <label>Chọn Giới tính</label>
                                <select className="form-control"
                                    id="gender" name="gender"
                                    onChange={formik.handleChange}
                                    value={formik.values.gender} >
                                    <option value="">---</option>
                                    <option value="nam">Nam</option>
                                    <option value="nữ">Nữ</option>
                                    <option value="khác">Khác</option>
                                </select>
                                    <span className='error'> {formik.errors.gender && formik.touched.gender && (
                                    <div>{formik.errors.gender}</div>
                                ) }</span>
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

export default StudentCreatePage;