import { useState } from 'react';
import axios from 'axios';

const TestEingabeAdresse = () => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    street: '',
    zipCode: '',
    city: '',
    district: ''
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    try {
      await axios.post('http://localhost:4000/api/users/me/adresse', form, {
        withCredentials: true
      });
      setMessage('Adresse erfolgreich gespeichert!');
    } catch (error) {
      setMessage(error.response?.data?.message || 'Fehler beim Speichern der Adresse');
    }
  };

  return (
    <div>
      <h2>Adresse eingeben</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstName"
          placeholder="Vorname"
          value={form.firstName}
          onChange={handleChange}
          required
        /><br />
        <input
          type="text"
          name="lastName"
          placeholder="Nachname"
          value={form.lastName}
          onChange={handleChange}
          required
        /><br />
        <input
          type="text"
          name="street"
          placeholder="Straße"
          value={form.street}
          onChange={handleChange}
          required
        /><br />
        <input
          type="text"
          name="zipCode"
          placeholder="PLZ"
          value={form.zipCode}
          onChange={handleChange}
          required
        /><br />
        <input
          type="text"
          name="city"
          placeholder="Ort"
          value={form.city}
          onChange={handleChange}
          required
        /><br />
        <input
          type="text"
          name="district"
          placeholder="Ortsteil"
          value={form.district}
          onChange={handleChange}
          required
        /><br />
        <button type="submit">Adresse speichern</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default TestEingabeAdresse;