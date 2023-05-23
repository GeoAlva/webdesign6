import "../login/login.css"
import Airtable from 'airtable';
import React,{ useEffect,useState } from 'react';

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
                        <label class="floating-label" for="email">Username / e-mail</label>
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
                    <a href="#" class="forgot">Password dimenticata?</a>

                    <input type="submit" id="submit" name="submit" value="Registrati" class="btn" />
                    <p class="account"> hai già un account?</p>
                    <a href="/login">Accedi</a>
                    <br />
                </form>

                <div class="bg">

                </div>

            
            </div>
            <UserExistsComponent/>
        </div >


    )
}

function UserExistsComponent() {
  const [userExists, setUserExists] = useState(false);

  const email = 'marco@jh'; // Replace with the user's email you want to check

  useEffect(() => {
    checkUserExists(email)
      .then((exists) => setUserExists(exists))
      .catch((error) => console.error('Error checking user existence:', error));
  }, [email]);

  return <div>{userExists ? 'User exists' : 'User does not exist'}</div>;
}

function checkUserExists(email) {
    const base = new Airtable({ apiKey: 'keyIXV1o7EbmywgbWZE' }).base('appHcO1NO4VD6sc');
    const table = base('Table 2');

  return new Promise((resolve, reject) => {
    table
      .select({
        filterByFormula: `Username = '${email}'`, // Replace 'Email' with the actual field name in your Airtable
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
      