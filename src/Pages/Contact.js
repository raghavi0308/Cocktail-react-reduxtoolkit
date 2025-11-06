import React from "react";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="container mt-4 page-section">
      <div className="row g-4">
        <div className="col-lg-6">
          <h2 className="mb-2 page-title">Contact</h2>
          <p className="page-lead">We’d love to hear from you.</p>
          <form onSubmit={handleSubmit} className="mt-3 section-card p-3">
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input type="text" className="form-control" placeholder="Your name" required />
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input type="email" className="form-control" placeholder="you@example.com" required />
            </div>
            <div className="mb-3">
              <label className="form-label">Message</label>
              <textarea className="form-control" rows="4" placeholder="Write your message..." required />
            </div>
            <button className="btn btn-details" type="submit">Send message</button>
          </form>
        </div>
        <div className="col-lg-6">
          <div className="section-card p-3 h-100">
            <h5 className="mb-2">Get in touch</h5>
            <p className="mb-1">Email: support@cocktailcatalog.app</p>
            <p className="mb-1">Hours: Mon–Fri, 9am–5pm</p>
            <p className="mb-0 text-muted">We aim to respond within 1–2 business days.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;


