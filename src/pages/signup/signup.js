import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Airtable from 'airtable';

export default function Signin() {

  if (document.cookie.startsWith("email=")) {
    window.location.replace('/profile');
  }

  const navigate = useNavigate();
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const email = event.target.elements.email.value;
    const password = event.target.elements.pass.value;
    const confirmPassword = event.target.elements.confirm_pass.value;

    if (password !== confirmPassword) {
      setError('Errore: le due password inserite non sono uguali!');
      return;
    }

    try {
      const userExists = await checkEmailExists(email);

      if (userExists) {
        setError('Errore: l\'indirizzo email è già registrato!');
        return;
      }

      const encoder = new TextEncoder();
      const data = encoder.encode(password);
      const hashBuffer = await crypto.subtle.digest('SHA-256', data);
      const hashedPassword = Array.from(new Uint8Array(hashBuffer)).map(byte => byte.toString(16).padStart(2, '0')).join('');

      const base = new Airtable({ apiKey: 'keyIXV1obmywgbWZE' }).base('app7EHcO1NO4VD6sc');
      const response = await base('Utenti').create({
        Email: email,
        Password: hashedPassword,
      });
      console.log('Form action successful', response);
      navigate('/login');
    } catch (error) {
      console.error('Form action error', error);
    }
  };

  return (
    <div className="login">
      <div className="left-slogan">
        <h1 className="slogan">Ciao</h1>
        <br />
        <p className="text_fg">
          Inizia subito a costruire il tuo curriculum ideale e <br />
          preparati a conseguire il lavoro che hai sempre <br /> sognato
        </p>
      </div>
      <div className="right-form">
        <form onSubmit={handleSubmit} method="post" className="form">
          <h2 className="benvenuto">Registrati</h2>

          <div className="form-element">
            <img src="images/Persona.png" alt="" className="icons" />
            <input type="email" id="email" name="email" className="form-input" placeholder=" " required />
            <label className="floating-label" htmlFor="email">
              E-mail
            </label>
          </div>

          <div className="form-element">
            <img src="images/Lucchetto.png" alt="" className="icons" />
            <input type="password" id="pass" name="pass" className="form-input" placeholder=" " required />
            <label className="floating-label" htmlFor="pass">
              Password
            </label>
          </div>

          <div className="form-element">
            <img src="images/Lucchetto.png" alt="" className="icons" />
            <input
              type="password"
              id="confirm_pass"
              name="confirm_pass"
              className="form-input"
              placeholder=" "
              required
            />
            <label className="floating-label" htmlFor="confirm_pass">
              Conferma password
            </label>
          </div>

          {error && <p className="error">{error}</p>}

          <input type="submit" id="submit" name="submit" value="Registrati" className="btn" />
          <p className="account">Hai già un account?</p>
          <a href="/login">Accedi</a>
          <br />
        </form>

        <div className="bg"></div>
      </div>
    </div>
  );
}

async function checkEmailExists(email) {
  const base = new Airtable({ apiKey: 'keyIXV1obmywgbWZE' }).base('app7EHcO1NO4VD6sc');
  const table = base('Utenti');

  return new Promise((resolve, reject) => {
    table
      .select({
        filterByFormula: `Email = '${email}'`,
        maxRecords: 1,
      })
      .firstPage((err, records) => {
        if (err) {
          reject(err);
          return;
        }

        resolve(records.length > 0);
      });
  });
}
