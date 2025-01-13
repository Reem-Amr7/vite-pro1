import React from 'react'
import SubFooter from '../SubFooter/SubFooter'

export default function About() {
  return (
    <section className="about-section text-center d-flex flex-column justify-content-center align-items-center">
    <div className="container">
      <h2 className="text-uppercase text-light fw-bold mb-2 fs-1">About Component</h2>
      <div className="d-flex justify-content-center align-items-center mb-4">
        <hr className="about-line me-2" />
        <i className="bi bi-star-fill text-light"></i>
        <hr className="about-line ms-2" />
      </div>
      <div className="row text-light">
        <div className="col-md-6 mb-3">
          <p>
            Freelancer is a free bootstrap theme created by Route. The download includes 
            the complete source files including HTML, CSS, and JavaScript as well as 
            optional SASS stylesheets for easy customization.
          </p>
        </div>
        <div className="col-md-6 mb-3">
          <p>
            Freelancer is a free bootstrap theme created by Route. The download includes 
            the complete source files including HTML, CSS, and JavaScript as well as 
            optional SASS stylesheets for easy customization.
          </p>
        </div>
      </div>
    </div>

  </section>
  )
}
