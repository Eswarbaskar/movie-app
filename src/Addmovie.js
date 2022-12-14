// import React, { useContext } from 'react'
import { useFormik } from 'formik';
// import UserContext from './Usercontext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Addmovie() {
    // const UserData = useContext(UserContext)
    const navigate = useNavigate()
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
        onSubmit:async (values) => {
           try{
            await axios.post("https://634820b50b382d796c6a0c42.mockapi.io/movie-app/api",values)
            navigate("/movielist")
           } catch(errors){
            console.log(errors)

           }
        },
    });
    return (
        <>
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
                    
                            <img className='image' src="https://c4.wallpaperflare.com/wallpaper/153/110/404/movies-bollywood-movies-wallpaper-preview.jpg" alt="" />
                    </div>
                </div>
            </div>


        </>
    )
}

export default Addmovie