export default function Contacts() {
    return (
      <section className="contact-section text-center d-flex flex-column justify-content-center align-items-center">
        <div className="container">
          <h2 className="text-uppercase fw-bold mb-2 fs-1" style={{ color: '#2c3e50' }}>Contact Section</h2> {/* تغيير اللون هنا */}
          <div className="d-flex justify-content-center align-items-center mb-4">
            <hr className="about-line me-2" />
            <i className="bi bi-star-fill text-dark"></i>
            <hr className="about-line ms-2 " />
          </div>

          <form className="contact-form">
  <div className="mb-3">
    <label htmlFor="username" className="form-label text-light"></label>
    <input type="text" className="form-control border-0 border-bottom input-center fs-6" id="username" placeholder="userName" />
  </div>
  <div className="mb-3">
    <label htmlFor="userage" className="form-label text-light"></label>
    <input type="number" className="form-control border-0 border-bottom fs-6" id="userage" placeholder="userAge" />
  </div>
  <div className="mb-3">
    <label htmlFor="useremail" className="form-label text-light"></label>
    <input type="email" className="form-control border-0 border-bottom fs-6" id="useremail" placeholder="userEmail" />
  </div>
  <div className="mb-3">
    <label htmlFor="userpassword" className="form-label text-light"></label>
    <input type="password" className="form-control border-0 border-bottom fs-6" id="userpassword" placeholder="userPassword" />
  </div>
  <button type="submit" className="btn btn-send-message">Send Message</button>
</form>

    
        </div>
      </section>
    );
  }
  