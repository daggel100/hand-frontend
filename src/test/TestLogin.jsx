
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import TestEingabeAdresse from "./TestEingabeAdresse";

const TestLogin = () => {

  const [form, setForm] = useState({ email: '', password: '' });
  const [message, setMessage] = useState('');
  const [showReset, setShowReset] = useState(false);
  const [resetEmail, setResetEmail] = useState('');
  const [resetMsg, setResetMsg] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setMessage('');
    try {
      const res = await axios.post('http://localhost:4000/api/auth/login', form, {
        withCredentials: true,
      });
      setMessage(res.data.message || 'Login erfolgreich');
      // Nach Login anzeigen
      setIsLoggedIn(true);

    } catch (error) {
      setMessage(error.response?.data?.message || 'Fehler beim Login');
    }
  };

  const handleReset = async (e) => {
    e.preventDefault();
    setResetMsg('');
    try {
      // Passe die Route ggf. an dein Backend an
      const res = await axios.post('http://localhost:4000/api/auth/forgot-password', { email: resetEmail });
      setResetMsg(res.data.message || 'E-Mail zum Zurücksetzen gesendet!');
     
    } catch (error) {
      setResetMsg(error.response?.data?.message || 'Fehler beim Senden der E-Mail');
    }
  };

  return (
    <div>
      <h2>TestLogin</h2>
      {!isLoggedIn ? (

    <form onSubmit={handleLogin}>
        <input
          type="email"
          name="email"
          placeholder="E-Mail"
          value={form.email}
          onChange={handleChange}
          required
        />
        <br />
        <input
          type="password"
          name="password"
          placeholder="Passwort"
          value={form.password}
          onChange={handleChange}
          required
        />
        <br />
        <button type="submit">Login</button>
        </form>
        ) : (
        <TestEingabeAdresse />
        )}
      {message && <p>{message}</p>}

      {/* <button onClick={() => setShowReset(!showReset)} style={{ marginTop: '1em' }}>
        Passwort vergessen?
      </button>

      {showReset && (
        <form onSubmit={handleReset} style={{ marginTop: '1em' }}>
          <input
            type="email"
            placeholder="E-Mail für Reset"
            value={resetEmail}
            onChange={e => setResetEmail(e.target.value)}
            required
          />
          <button type="submit">Neues Passwort anfordern</button>
          {resetMsg && <p>{resetMsg}</p>}
        </form>
      )} */}

      <div style={{ marginTop: '2em' }}>
        Noch keinen Account?{' '}
        <Link to="/register">
          Hier registrieren
        </Link>
      </div>
      </div>
  )
}
export default TestLogin