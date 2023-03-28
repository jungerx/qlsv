import React from 'react'
import { useFormik } from 'formik'
import *as Yup from 'yup'
import { useState,useEffect } from 'react'
import Message from '../../components/Message'
import {useParams} from 'react-router-dom'


const StudentEdit = () => {
    const params=useParams();
    const [message, setMessage] = useState(null);
    const [isError, setIsError] = useState(false);
    const [isLoaded,setIsloaded]= useState(false)



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
        fetch(`https://641d2df41a68dc9e4618835b.mockapi.io/api/v1/students/${params.id}`,{
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
        .then((res)=>{
            setMessage("Đã cập nhật thành công");
            setIsError(false);
            window.location.href='/'
        })
        .catch((error)=> {
            setMessage(error);
            setIsError(true);
        });
    }
    ;
    useEffect(() => {
        fetch(`https://641d2df41a68dc9e4618835b.mockapi.io/api/v1/students/${params.id}`)
        .then((result)=>result.json())
        .then((result)=>{
            setIsError(false);
            formik.values.name=result.name;
            formik.values.birthday=result.birthday;
            formik.values.gender=result.gender;
            setIsloaded(true);
        })
        .catch((error)=>{
            console.log(error)
        });
    }, []);
    if(!isLoaded){
        return <div className='text-success mb-3'>
          Loading ...
        </div>
      }
      else if(isError){
        return <div className='text-danger mb-3'>
        {isError}
      </div>
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
                                value={formik.values.name}
                                onChange={formik.handleChange} />
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
                                value={formik.values.birthday}
                                onChange={formik.handleChange}  />
                                   <span className='error'> {formik.errors.birthday && formik.touched.birthday && (
                                    <div>{formik.errors.birthday}</div>
                                ) }</span>
                            </div>
                            <div className="form-group">
                                <label>Chọn Giới tính</label>
                                <select 
                                className="form-control"
                                id="gender"
                                value={formik.values.gender}
                                name="gender"onChange={formik.handleChange}  
                                  >
                                    <option value="">---</option>
                                    <option value='nam'>Nam</option>
                                    <option value='nữ'>Nữ</option>
                                    <option value='khác'>Khác</option>
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

export default StudentEdit;