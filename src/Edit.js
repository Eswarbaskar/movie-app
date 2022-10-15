import axios from 'axios'
import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
// import UserContext from './Usercontext'
import { useFormik } from 'formik';
import { apiUrl } from './App';

function Edit() {
  let navigate = useNavigate()
  let params = useParams()
  const formik = useFormik({
    initialValues: {
        name: '',
        rating: '',
        poster: '',
        summary: '',
    },
    validate: (values) => {
        const errors = {};
        if (!values.name) {
            errors.name = 'Required';
        }
        if (!values.rating || (values.rating < 1 && values.rating > 10)) {
            errors.rating = 'Required';
        }
        if (!values.poster) {
            errors.poster = 'Required';
        }
        if (!values.summary) {
            errors.summary = 'Required';
        }
        return errors;
    },
    onSubmit:async(values)=>{
      await axios.put(`${apiUrl}/${params.id}`,values)
      navigate("/movielist")
    },
  })
  async function fetchData() {
    try {
      let user = await axios.get(`${apiUrl}/${params.id}`)
      formik.setValues(user.data)
    }
    catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {

    fetchData()
  }, [])
  return (
    <div className="container">
    <div className="row">
        <div className="col-lg-6">
            <form onSubmit={formik.handleSubmit}>

                <div className='movier-poste mt-3'>
                    <div className="input-group mb-3">
                        <div className="input-group-text">
                            <label htmlFor="name">MovieName</label>
                        </div>
                        <input type="text" className="form-control"
                            id='name'
                            name='name'
                            onChange={formik.handleChange}
                            value={formik.values.name}
                        />
                    </div>
                    <div className="input-group mb-3">
                        <div className="input-group-text">
                            <label htmlFor="rating">Rating</label>
                        </div>
                        <input type="number" className="form-control"
                            id='rating'
                            name='rating'
                            placeholder='rating 1 to 10'
                            onChange={formik.handleChange}
                            value={formik.values.rating}
                        />
                    </div>
                    <div className="input-group mb-3">
                        <div className="input-group-text">
                            <label htmlFor="poster">Poster</label>
                        </div>
                        <input type="text" className="form-control"
                            id='poster'
                            name='poster'
                            placeholder='poster URL only'
                            onChange={formik.handleChange}
                            value={formik.values.poster} />
                    </div>
                    <div className="input-group mb-3">
                        <div className="input-group-text">
                            <label htmlFor="summary">Summary</label>
                        </div>
                        <input type="text" className="form-control"
                            id='summary'
                            name='summary'
                            onChange={formik.handleChange}
                            value={formik.values.summary}
                        />
                    </div>
                    <button type='sumbit' className='btn btn-primary'>Add</button>
                </div>
            </form>
        </div>
        <div className="col-lg-6">
        
                <img className='image' src="https://c4.wallpaperflare.com/wallpaper/832/728/919/5bd23b8e604cd-wallpaper-preview.jpg" alt="" />
        </div>
    </div>
</div>


  )
}

export default Edit