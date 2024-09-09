import Img1 from '../img/1 (1).jpg'
import Img2 from '../img/1 (2).jpg'
import Img3 from '../img/1 (3).jpg'
export default function slideshere (){
    return(
        <div>
                  <div id="carouselExampleDark" className=" carousel carousel-dark slide ">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="10000">
            <img
              className="simg d-block w-100"
              src={Img1}
              alt=""
            />
            <div className="carousel-caption d-none d-md-block">
              <h1 className=' mb-5 text-white bg-info '>deatil slide label</h1>
              <p className='mb-5 text-white bg-info corner'>
                Some representative placeholder content for the first slide.
              </p>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img
              className="simg d-block w-100"
              src={Img2}
              alt=""
            />
            <div className="carousel-caption d-none d-md-block">
            <h1 className=' mb-5 text-white bg-info '>deatil slide label</h1>
              <p className='mb-5 text-white bg-info corner'>
                Some representative placeholder content for the first slide.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              className="simg d-block w-100"
              src={Img3}
              alt=""
            />
            <div className="carousel-caption d-none d-md-block">
            <h1 className=' mb-5 text-white bg-info '>deatil slide label</h1>
              <p className='mb-5 text-white bg-info corner'>
                Some representative placeholder content for the first slide.
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
        </div>
    )
}