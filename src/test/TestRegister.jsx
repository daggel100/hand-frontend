import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const TestRegister = () => {
  const [userForm, setUserForm] = useState({
    nickname: '',
    email: '',
    password: ''
  });

  // const [addressForm, setAddressForm] = useState({
  //   firstName: '',
  //   lastName: '',
  //   street: '',
  //   zipCode: '',
  //   city: '',
  //   district: ''
  // });

  const [message, setMessage] = useState('');
  // const [showVerification, setShowVerification] = useState(false);
  // const [verificationCode, setVerificationCode] = useState('');
  // const [userId, setUserId] = useState('');

  const navigate = useNavigate();

  // User-Formular ändern
  const handleUserChange = (e) => {
    setUserForm({ ...userForm, [e.target.name]: e.target.value });
  };

  // Adress-Formular ändern (wird hier nur gesammelt, aber noch nicht gespeichert)
  // const handleAddressChange = (e) => {
  //   setAddressForm({ ...addressForm, [e.target.name]: e.target.value });
  // };

  // Registrierung absenden (nur User anlegen)
  const handleRegister = async (e) => {
    e.preventDefault();
    setMessage('');
    try {
      const res = await axios.post('http://localhost:4000/api/auth/register', userForm);
      setMessage('Bitte prüfe deine E-Mails und gib den Verifizierungscode ein.');
      // setShowVerification(true);
      // setUserId(res.data.userId); // Dein Backend sollte die User-ID zurückgeben!
    } catch (error) {
      setMessage(error.response?.data?.message || 'Fehler bei der Registrierung');
    }
  };

  // Verifizierung absenden (Adresse wird NICHT gespeichert!)
  // const handleVerify = async (e) => {
  //   e.preventDefault();
  //   setMessage('');
  //   try {
  //     await axios.post('http://localhost:4000/api/auth/verify', {
  //       userId,
  //       code: verificationCode
  //     });
  //     setMessage('Verifizierung erfolgreich! Du kannst dich jetzt einloggen und danach deine Adresse eingeben.');
  //     setTimeout(() => navigate('/login'), 2000); // Weiterleitung zum Login
  //   } catch (error) {
  //     const msg = error.response?.data?.message || 'Fehler bei der Verifizierung';
  //     setMessage(msg);
  //     // Automatisch weiterleiten, wenn schon verifiziert
  //     if (msg.toLowerCase().includes('bereits verifiziert')) {
  //       setTimeout(() => navigate('/login'), 2000);
  //     }
  //   }
  // };

  return (
    <div>
      <h2>Registrierung</h2>
      {/* {!showVerification ?  */}
        <form onSubmit={handleRegister}>
          <h3>User-Daten</h3>
          <input
            type="text"
            name="nickname"
            placeholder="Nickname"
            value={userForm.nickname}
            onChange={handleUserChange}
            required
          /><br />
          <input
            type="email"
            name="email"
            placeholder="E-Mail"
            value={userForm.email}
            onChange={handleUserChange}
            required
          /><br />
          <input
            type="password"
            name="password"
            placeholder="Passwort"
            value={userForm.password}
            onChange={handleUserChange}
            required
          /><br />
          {/* <h3>Adressdaten (werden nach Login gespeichert)</h3>
          <input
            type="text"
            name="firstName"
            placeholder="Vorname"
            value={addressForm.firstName}
            onChange={handleAddressChange}
            required
          /><br /> */}
          {/* <input
            type="text"
            name="lastName"
            placeholder="Nachname"
            value={addressForm.lastName}
            onChange={handleAddressChange}
            required
          /><br />
          <input */}
            {/* type="text"
            name="street"
            placeholder="Straße"
            value={addressForm.street}
            onChange={handleAddressChange}
            required
          /><br /> */}
          {/* <input
            type="text"
            name="zipCode"
            placeholder="PLZ"
            value={addressForm.zipCode}
            onChange={handleAddressChange}
            required
          /><br /> */}
          {/* <input
            type="text"
            name="city"
            placeholder="Ort"
            value={addressForm.city}
            onChange={handleAddressChange}
            required
          /><br /> */}
          {/* <input
            type="text"
            name="district"
            placeholder="Ortsteil"
            value={addressForm.district}
            onChange={handleAddressChange}
            required
          /><br /> */}
          <button type="submit">Registrieren</button>
        </form>
      {/* ) : ( */}
        {/* // <form onSubmit={handleVerify}>
        //   <h3>Verifizierung</h3>
        //   <input */}
        {/* //     type="text"
        //     placeholder="Verifizierungscode"
        //     value={verificationCode}
        //     onChange={e => setVerificationCode(e.target.value)}
        //     required
        //   /><br />
        //   <button type="submit">Bestätigen</button>
        // </form> */}
      {/* )} */}
      {message && <p>{message}</p>}
    </div>
  );
};

export default TestRegister;