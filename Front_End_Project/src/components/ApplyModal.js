import { useState } from 'react';

function ApplyModal({ scholarship, onClose }) {
  const [application, setApplication] = useState({ name: '', email: '', statement: '' });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    setApplication({ ...application, [e.target.name]: e.target.value });
  };

  const submitApplication = (e) => {
    e.preventDefault();
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      onClose();
    }, 3000);
  };

  return (
    <div className="modal show">
      <div className="modal-content">
        <h3>Apply for {scholarship.name}</h3>
        {!showSuccess ? (
          <form onSubmit={submitApplication}>
            <div className="form-group">
              <label>Name:</label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={application.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Email:</label>
              <input
                type="email"
                className="form-control"
                name="email"
                value={application.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Statement:</label>
              <textarea
                className="form-control"
                name="statement"
                value={application.statement}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
            <button type="button" className="btn btn-secondary" onClick={onClose}>Close</button>
          </form>
        ) : (
          <div className="success-box">
            Application submitted successfully!
          </div>
        )}
      </div>
    </div>
  );
}

export default ApplyModal;