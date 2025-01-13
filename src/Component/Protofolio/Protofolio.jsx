import React from 'react';


// استيراد الصور
import portImage1 from '../../assets/poert1.png';
import portImage2 from '../../assets/port2.png';
import preactLogo from '../../assets/port3.png';

export default function Protofolio() {
  return (
    <div className="container my-5 pt-3">
      {/* الصف الأول */}
      <h2 className="text-uppercase fw-bold fs-1 mt-5 pt-3 text-center portfolio-title">portfolio component</h2> 
      <div className="d-flex justify-content-center align-items-center mb-4">
        <hr className="about-line me-2" />
        <i className="bi bi-star-fill text-dark"></i>
        <hr className="about-line ms-2" />
      </div>
      <div className="row">
        {/* الصورة الأولى */}
        <div className="col-md-4 mb-4">
          <div className="card m-2">
            <div className="card-body d-flex justify-content-center align-items-center bg-port1 rounded rounded-lg">
              <img src={portImage1} alt="Port 1" className="img-fluid " />
            </div>
          </div>
        </div>
        {/* الصورة الثانية */}
        <div className="col-md-4 mb-4">
          <div className="card m-2">
            <div className="card-body d-flex justify-content-center align-items-center bg-port2 rounded rounded-lg">
              <img src={portImage2} alt="Port 2" className="img-fluid portfolio-img" />
            </div>
          </div>
        </div>
        {/* الصورة الثالثة */}
        <div className="col-md-4 mb-4">
          <div className="card m-2">
            <div className="card-body d-flex justify-content-center align-items-center bg-port3 rounded rounded-lg">
              <img src={preactLogo} alt="Port 3" className="img-fluid portfolio-img" />
            </div>
          </div>
        </div>
      </div>

      {/* الصف الثاني */}
      <div className="row">
        {/* الصورة الأولى مكررة */}
        <div className="col-md-4 mb-4">
          <div className="card m-2">
            <div className="card-body d-flex justify-content-center align-items-center bg-port1 rounded rounded-lg">
              <img src={portImage1} alt="Port 1" className="img-fluid portfolio-img" />
            </div>
          </div>
        </div>
        {/* الصورة الثانية مكررة */}
        <div className="col-md-4 mb-4">
          <div className="card m-2">
            <div className="card-body d-flex justify-content-center align-items-center bg-port2 rounded rounded-lg">
              <img src={portImage2} alt="Port 2" className="img-fluid portfolio-img" />
            </div>
          </div>
        </div>
        {/* الصورة الثالثة مكررة */}
        <div className="col-md-4 mb-4">
          <div className="card m-2">
            <div className="card-body d-flex justify-content-center align-items-center bg-port3 rounded rounded-lg">
              <img src={preactLogo} alt="Port 3" className="img-fluid portfolio-img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
