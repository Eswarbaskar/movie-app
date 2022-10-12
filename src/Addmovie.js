import React from 'react'

function Addmovie() {
    return (
        <>
            <div className='movier-poste mt-3'>
                <div class="input-group mb-3">
                    <div class="input-group-text">
                        <label htmlFor="">MovieName</label>
                    </div>
                    <input type="text" class="form-control" />
                </div>
                <div class="input-group mb-3">
                    <div className="input-group-text">
                        <label htmlFor="">Rating</label>
                    </div>
                    <input type="text" class="form-control" />
                </div>
                <div class="input-group mb-3">
                    <div class="input-group-text">
                        <label htmlFor="">Poster</label>
                    </div>
                    <input type="text" class="form-control" />
                </div>
                <div class="input-group mb-3">
                    <div class="input-group-text">
                        <label htmlFor="">Summary</label>
                    </div>
                    <input type="text" class="form-control" />
                </div>
                <button type='sumbit' className='btn btn-primary'>Add</button>
            </div>


        </>
    )
}

export default Addmovie