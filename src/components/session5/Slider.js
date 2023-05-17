import React from 'react';

function Slider(props) {
    return (
        <>
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://cdn.dnaindia.com/sites/default/files/styles/full/public/2019/01/16/778917-ecommerce-thinkstock-083018.jpg" className="d-block w-100" alt="..."/>
                    </div>

                    <div className="carousel-item">
                        <img src="https://hsl.chapinindustries.com/wp-content/uploads/2021/06/ecommerce-10.jpg" className="d-block w-100" alt="..."/>
                    </div>

                    <div className="carousel-item">
                        <img src="https://www.witszen.com/wp-content/uploads/2018/05/ecommerce-website-development.jpg" className="d-block w-100" alt="..."/>
                    </div>
                </div>

                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
                        data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>

                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
                        data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    );
}

export default Slider;