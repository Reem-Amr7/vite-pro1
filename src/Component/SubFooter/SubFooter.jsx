import React from 'react';

export default function SubFooter() {
  return (
    <div className="SubFooter ">
      <div className="container">
        <div className="row text-center text-light">
          {/* Location Section */}
          <div className="col-md-4 mb-4 mb-md-0">
            <h4 className="text-uppercase mb-4">Location</h4>
            <p>2215 John Daniel Drive<br />Clark, MO 65243</p>
          </div>

          {/* Social Media Section */}
          <div className="col-md-4 mb-4 mb-md-0">
            <h4 className="text-uppercase mb-4">Around The Web</h4>
            <div className="d-flex justify-content-center">
              <a href="#" className="btn btn-outline-light btn-social mx-2">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#" className="btn btn-outline-light btn-social mx-2">
                <i className="bi bi-twitter"></i>
              </a>
              <a href="#" className="btn btn-outline-light btn-social mx-2">
                <i className="bi bi-linkedin"></i>
              </a>
              <a href="#" className="btn btn-outline-light btn-social mx-2">
                <i className="bi bi-globe"></i>
              </a>
            </div>
          </div>

          {/* About Section */}
          <div className="col-md-4">
            <h4 className="text-uppercase mb-4">About Freelancer</h4>
            <p>
              Freelancer is a free to use, licensed Bootstrap theme created by Route.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
