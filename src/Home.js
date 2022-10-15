import React from 'react'



function Home() {


  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">

            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                <h1 className='text-center'>Wlecome to IMBD</h1>
                <div className="carousel-item active">
                  <img src="https://c4.wallpaperflare.com/wallpaper/906/604/894/movies-bollywood-movies-wallpaper-preview.jpg" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                  <img src="https://s3.ap-south-1.amazonaws.com/media.filmyfocus.com/wp-content/uploads/2022/05/Sita-Ramam-promises-a-soulful-album.jpg" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                  <img src="https://c4.wallpaperflare.com/wallpaper/525/218/557/deepika-padukone-ranveer-singh-bollywood-movies-wallpaper-preview.jpg" className="d-block w-100" alt="..." />
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>


      </div>

    </>

  )
}

export default Home