
import axios from 'axios';
import { useState } from 'react';

const TestAdresse = () => {
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
        setForm({...form, [e.target.name]: e.target.value});
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage('');
        try {
            const res = await axios.post('http://localhost:4000/api/users/me/adresse', form, {
                withCredentials: true,
            });
            setMessage(res.data.message || 'Registrierung Adresse erfolgreich');

        }  catch (error) {
            setMessage(error.response?.data?.message || 'Fehler bei der Registrierung Adresse');
        }
    }

  return (
    <div>
      <h2>Test Adresse</h2>

      <form onSubmit={handleSubmit}>
            <input 
            type="text"
            name="firstName"
            placeholder='First Name'
            value={form.firstName}
            onChange={handleChange}
            required
             />
             <br />
             <input 
             type="text"
             name="lastName"
             placeholder='Last Name'
             value={form.lastName}
             onChange={handleChange}
             required
              />
              <br />
              <input 
              type="text"
              name="street"
              placeholder='Street'
              value={form.street}
              onChange={handleChange}
              required
              />
              <br />
              <input 
              type="text"
              name="zipCode"
              placeholder='Zip Code'
              value={form.zipCode}
              onChange={handleChange}
              required
              />
              <br />
              <input 
              type="text"
              name="city"
              placeholder='City'
              value={form.city}
              onChange={handleChange}
              required
              />
              <br />
              <input 
              type="text"
              name="district"
              placeholder='District'
              value={form.district}
              onChange={handleChange}
              required
              />

              <button type="submit">Registrierung</button>
        </form>
        {message && <p>{message}</p>}

    </div>
  )
}

export default TestAdresse
