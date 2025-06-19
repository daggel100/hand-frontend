import { useState } from 'react';
import './RegisterForm.css';


const RegisterForm = ({ onSuccess }) => {
  const [formData, setFormData] = useState({
    nickname: '',
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    street: '',
    city: '',
    district: '',
    zipCode: '',
  });
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const validateForm = () => {
    const errors = {};
    Object.keys(formData).forEach((key) => {
      if (!formData[key]) {
        errors[key] = 'Dieses Feld darf nicht leer sein.';
      }
    });
    return errors;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage('');
    setFormErrors({});
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      setIsSubmitting(false);
      return;
    }
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nickname: formData.nickname,
          email: formData.email,
          password: formData.password,
          adress: {
            firstName: formData.firstName,
            lastName: formData.lastName,
            street: formData.street,
            city: formData.city,
            district: formData.district,
            zipCode: Number(formData.zipCode),
          },
        }),
      });
      const data = await response.json();
      if (response.ok) {
        localStorage.setItem('token', data.token);
        if (typeof onSuccess === 'function') {
        onSuccess(data);
        }
      } else {
        setMessage(`:x: Fehler: ${data.message || 'Unbekannter Fehler'}`);
      }
    } catch (error) {
      console.error(error);
      setMessage(':x: Serverfehler.');
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <form onSubmit={handleSubmit} className="register-form">
      {['nickname', 'email', 'password', 'firstName', 'lastName', 'street', 'city', 'district', 'zipCode'].map((field) => (
        <label key={field}>
          {field.charAt(0).toUpperCase() + field.slice(1)}:
          <input
            type={field === 'email' ? 'email' : field === 'zipCode' ? 'number' : 'text'}
            name={field}
            value={formData[field]}
            onChange={handleChange}
            required
          />
          {formErrors[field] && <p className="warning">{formErrors[field]}</p>}
        </label>
      ))}
      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Wird gesendet...' : 'Registrieren'}
      </button>
      {message && <p className="warning">{message}</p>}
    </form>
  );
};
export default RegisterForm;