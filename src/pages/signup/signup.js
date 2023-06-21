import "../login/login.css"
import Airtable from 'airtable';
import React, { useEffect, useState } from 'react';

export default function Signin() {
  return (

    <div class="login" >
      <div class="left-slogan">

        <h1 class="slogan">Ciao</h1>
        <br />
        <p class="text_fg">Inizia subito a costruire il tuo curriculum ideale e <br />
          preparati a conseguire il lavoro che hai sempre <br /> sognato</p>


      </div>
      <div class="right-form">


        <form action="https://hooks.airtable.com/workflows/v1/genericWebhook/app7EHcO1NO4VD6sc/wfly6ZQdazFFW1esL/wtrIPVNFpFcOK3OUR" method="post" class="form">
          <h2 class="benvenuto">Registrati</h2>

          <div class="form-element">
            <img src="images/Persona.png" alt="" class="icons" />
            <input type="email" id="email" name="email" class="form-input" placeholder=" " required />
            <label class="floating-label" for="email">E-mail</label>
          </div>

          <div class="form-element">
            <img src="images/Lucchetto.png" alt="" class="icons" />
            <input type="password" id="pass" name="pass" class="form-input" placeholder=" " required />
            <label class="floating-label" for="pass">Password</label>
          </div>

          <div class="form-element">
            <img src="images/Lucchetto.png" alt="" class="icons" />
            <input type="password" id="confirm_pass" name="confirm_pass" class="form-input" placeholder=" " required />
            <label class="floating-label" for="confirm_pass">Conferma password</label>
          </div>

          <input type="submit" id="submit" name="submit" value="Registrati" class="btn" />
          <p class="account"> Hai già un account?</p>
          <a href="/login">Accedi</a>
          <br />
        </form>

        <div class="bg">

        </div>
      </div>
    </div >


  )
}

function UserExistsComponent() {
  const [userExists, setUserExists] = useState(false);
  const [userInfo, setUserInfo] = useState(null);

  const email = 'marco@jh'; // rimpiazzare con l'elemento del record da cercare

  useEffect(() => {
    checkUserExists(email)
      .then((result) => {
        setUserExists(result.exists);
        if (result.exists) {
          setUserInfo(result.userInfo);
        }
      })
      .catch((error) => console.error('Error checking user existence:', error));
  }, [email]);

  return (
    <div>
      {userExists ? (
        <div>
          <p>User {email} exists</p>
          {userInfo && (
            <div>
              <p>Password: {userInfo.password}</p>
              {/* Add more fields here if needed */}
            </div>
          )}
        </div>
      ) : (
        <p>User does not exist</p>
      )}
    </div>
  );
}

function checkUserExists(email) {
  const base = new Airtable({ apiKey: 'keyIXV1obmywgbWZE' }).base('app7EHcO1NO4VD6sc'); //api key e link alla pagina
  const table = base('Table 2'); // nome della tabella da cui si prendono le informazioni

  return new Promise((resolve, reject) => {
    table
      .select({
        filterByFormula: `Email = '${email}'`, // nome del campo da cui prendere le informazioni
        maxRecords: 1,
      })
      .firstPage((err, records) => {
        if (err) {
          reject(err);
          return;
        }

        if (records.length > 0) {
          // User exists
          const user = records[0];
          const userInfo = {
            password: user.fields.Password, // rimpiazzare col nome del campo dal quale si vogliono ottenere i dati
            // Add more fields here if needed
          };

          resolve({ exists: true, userInfo });
        } else {
          // User does not exist
          resolve({ exists: false, userInfo: null });
        }
      });
  });
}
