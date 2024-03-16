import { useState } from "react";

function emailIsValid(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formErrors, setFormErrors] = useState({});
  const [submissionStatus, setSubmissionStatus] = useState(''); // New state for submission status

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));

    if (formErrors[name]) {
      setFormErrors(prevErrors => {
        const updatedErrors = { ...prevErrors };
        delete updatedErrors[name];
        return updatedErrors;
      });
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name) errors.name = 'Name is required';
    if (!formData.email) {
      errors.email = 'Email is required';
    } else if (!emailIsValid(formData.email)) {
      errors.email = 'Email is not valid';
    }
    if (!formData.message) errors.message = 'Message is required';
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      console.log('Form is valid, submit data:', formData);
      setFormErrors({});
      setFormData({ name: '', email: '', message: '' }); 
      setSubmissionStatus('Form submitted successfully!'); 

      setTimeout(() => {
        setSubmissionStatus('');
      }, 5000);
    } else {
      console.log('Form is invalid, show errors:', errors);
      setFormErrors(errors);
    }
  };

  return (
    <div className="main-container2">
      <form onSubmit={handleSubmit}>
        <div className="spacing">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
          {formErrors.name && <div className="text-danger">{formErrors.name}</div>}
        </div>
        <div className="spacing">
          <label htmlFor="email">Email Address:</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
          {formErrors.email && <div className="text-danger">{formErrors.email}</div>}
        </div>
        <div className="spacing">
          <label htmlFor="message">Message:</label>
          <textarea
            className="form-control"
            name="message"
            rows="7"
            value={formData.message}
            onChange={handleInputChange}
          />
          {formErrors.message && <div className="text-danger">{formErrors.message}</div>}
        </div>
        <button type="submit" className="submit-button"> 
        Submit</button>
      </form>
    </div>
  );
}

export default ContactForm;
