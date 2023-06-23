import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Airtable from 'airtable';

export default function Login() {
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const email = event.target.elements.email.value;
    const password = event.target.elements.pass.value;

    try {
      const userExists = await checkUserExists(email, password);

      if (userExists) {
        navigate('/home'); //ho messo una pagina a caso per testare
      } else {
        setError('Account non trovato!');
      }
    } catch (error) {
      console.error('Form action error', error);
    }
  };

  return (
    <div className="login">
      <div className="left-slogan">
        <h1 className="slogan">Ciao</h1>
        <br />
        <p className="text_fg">Inizia subito a costruire il tuo curriculum<br />e trova il lavoro che hai sempre sognato.</p>
      </div>
      <div className="right-form">
        <form onSubmit={handleSubmit} method="post" className="form">
          <h2 className="benvenuto">Login</h2>

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
          <a href="#" className="forgot">
            Password dimenticata?
          </a>

          {error && <p className="error">{error}</p>}

          <input type="submit" id="submit" name="submit" value="Accedi" className="btn" />
          <p className="account">Non hai un account?</p>
          <a href="/signup">Registrati</a>
          <br />
        </form>

        <div className="bg"></div>
      </div>
    </div>
  );
}

async function checkUserExists(email, password) {
  const base = new Airtable({ apiKey: 'keyIXV1obmywgbWZE' }).base('app7EHcO1NO4VD6sc');
  const table = base('Utenti');

  return new Promise((resolve, reject) => {
    table
      .select({
        filterByFormula: `Email = '${email}'`,
        maxRecords: 1,
      })
      .firstPage(async (err, records) => {
        if (err) {
          reject(err);
          return;
        }

        if (records.length > 0) {
          const hashedPassword = records[0].get('Password');

          const encoder = new TextEncoder();
          const data = encoder.encode(password);
          const hashBuffer = await crypto.subtle.digest('SHA-256', data);
          const inputHashedPassword = Array.from(new Uint8Array(hashBuffer)).map(byte => byte.toString(16).padStart(2, '0')).join('');

          const passwordMatch = hashedPassword === inputHashedPassword;
          resolve(passwordMatch);
        } else {
          resolve(false);
        }
      });
  });
}
