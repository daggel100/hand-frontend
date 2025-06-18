
import axios from 'axios';
import { useState } from 'react';

const TestUser = () => {

    const [form, setForm] = useState({
        nickname: '',
        email: '',
        password: '',
    });

    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value});
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage('');
        try {
            const res = await axios.post('http://localhost:4000/api/auth/register', form, {
                withCredentials: true,
            });
            setMessage(res.data.message || 'Registrierung erfolgreich');

        }  catch (error) {
            setMessage(error.response?.data?.message || 'Fehler bei der Registrierung');
        }
    }
  return (

    <div>
        <h2> Test User</h2>

        <form onSubmit={handleSubmit}>
            <input 
            type="text"
            name="nickname"
            placeholder='Nickname'
            value={form.nickname}
            onChange={handleChange}
            required
             />
             <br />
             <input 
             type="email"
             name="email"
             placeholder='Email'
             value={form.email}
             onChange={handleChange}
             required
              />
              <br />
              <input 
              type="password"
              name="password"
              placeholder='Password'
              value={form.password}
              onChange={handleChange}
              required
              />
              <br />
              <button type="submit">Registrierung</button>
        </form>
        {message && <p>{message}</p>}
    </div>
  );
};
export default TestUser;