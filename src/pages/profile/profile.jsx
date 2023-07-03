import './profile.css'
import '../login/login.css'
import profilePhoto from "./profilePhoto.svg"
import pencil from "./pencil.svg"
import Cookies from 'universal-cookie';
import Button from '@mui/material/Button';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Airtable from 'airtable';


export default function Profile() {

  const base = new Airtable({ apiKey: 'keyIXV1obmywgbWZE' }).base('app7EHcO1NO4VD6sc');
  const [curriculumData, setCurriculumData] = useState([]);

  const cookie = new Cookies();

  const email = cookie.get('email');

  const navigate = useNavigate();
  useEffect(() => {
    if (email == undefined)
      navigate('/login')
  });

  const [error, setError] = useState('');

  const redirectToCurriculum = () => {
    navigate('/curriculum', { state: { mail: email, fromProfile: 'true' } })
  }


  const handleUpdate = async (event) => {
    event.preventDefault();
    const newEmail = event.target.elements.email.value;
    const password = event.target.elements.pass.value;
    const confirmPassword = event.target.elements.confirm_pass.value;

    if (password !== confirmPassword) {
      setError('Errore: le due password inserite non sono uguali!');
      return;
    }

    if (email !== newEmail) {
      const userExists = await checkEmailExists(newEmail);

      if (userExists) {
        setError('Errore: l\'indirizzo email è già registrato!');
        return;
      }
    }

    try {


      const encoder = new TextEncoder();
      const data = encoder.encode(password);
      const hashBuffer = await crypto.subtle.digest('SHA-256', data);
      const hashedPassword = Array.from(new Uint8Array(hashBuffer)).map(byte => byte.toString(16).padStart(2, '0')).join('');

      base('Utenti').select({
        filterByFormula: `Email = '${email}'`,
        maxRecords: 1,
      }).firstPage(async (err, records) => {
        if (err) {
          console.error(err);
          return;
        }
        if (records.length > 0) {
          const record = records[0];

          base('Utenti').update(
            [
              {
                id: record.id,
                fields: {
                  Email: newEmail,
                  Password: hashedPassword,
                },
              },
            ],
            (err, updatedRecords) => {
              if (err) {
                console.error(err);
                return;
              }
              console.log('Record updated successfully', updatedRecords);

              const cookie = new Cookies();
              cookie.remove('email');
              window.location.replace('/login');


            }
          )
        }
      })
    } catch (error) {
      console.error('Form action error', error);
    }
  };

  useEffect(() => {
    base('Curriculum').select({
      filterByFormula: `Email = '${email}'`,
      maxRecords: 1,
    }).firstPage((err, records) => {
      if (err) {
        console.error('Errore durante il recupero dei curriculum filtrati:', err);
        return;
      }
      const filteredData = records.map((record) => {
        return {
          foto: record.fields.foto,
        };
      });

      setCurriculumData(filteredData);
    });
  }, []);

  return (
    <>
      <div class='profile-page'>
        <div class='left'>
          <div class='user'>
            {
              curriculumData.length === 0 ? (
                <img className="profileImg" src={profilePhoto} alt="Profile" />
              ) : null
            }
            {curriculumData.map((curriculum) => {
              return curriculum.foto != null ? (
                <img className="profileImg" src={curriculum.foto[0].url} alt="Profile" width={'195px'} />
              ) : ( <img className="profileImg" src={profilePhoto} alt="Profile" width={'195px'} /> );
            })}
            <br />
            <p className="cardEmail">{email}</p>
            <br />
            <Button variant="outlined"
              //link di test
              href="https://airtable.com/shrMHq5TbbUJMNQFw"
              sx={{
                width: "318px",
                mb: "30px",
                px: 3,
                fontWeight: 'bold',
                borderRadius: '30px',
                fontFamily: 'Open Sans',
                fontSize: "15px",
                textTransform: 'none',
                border: "3px solid #008080",
                backgroundColor: 'transparent',
                color: '#000000',
                '&:hover': {
                  color: '#008080',
                  border: "3px solid #008080",
                },
              }}
            >Crea Curriculum</Button>

            <Button variant="outlined"
              onClick={() => redirectToCurriculum()}
              sx={{
                width: "318px",
                mb: "30px",
                px: 3,
                fontWeight: 'bold',
                borderRadius: '30px',
                fontFamily: 'Open Sans',
                fontSize: "15px",
                textTransform: 'none',
                border: "3px solid #008080",
                backgroundColor: 'transparent',
                color: '#000000',
                '&:hover': {
                  color: '#008080',
                  border: "3px solid #008080",
                },
              }}
            >Visualizza Curriculum</Button>

            <Button variant="outlined"
              href="https://airtable.com/shr3QfyQZSmspN6uU"
              sx={{
                width: "318px",
                mb: "30px",
                px: 3,
                fontWeight: 'bold',
                borderRadius: '30px',
                fontFamily: 'Open Sans',
                fontSize: "15px",
                textTransform: 'none',
                border: "3px solid #008080",
                backgroundColor: 'transparent',
                color: '#000000',
                '&:hover': {
                  color: '#008080',
                  border: "3px solid #008080",
                },
              }}
            >Modifica Curriculum</Button>

          </div>
        </div>
        <div class='right'>

          <div class='inner'>
            <h3 className='personale'>Stai cercando personale?</h3>
            <Button variant="outlined"
              //link di test
              href="/search"
              sx={{
                width: "312px",
                height: "51px",
                px: 3,
                fontWeight: 'bold',
                borderRadius: '30px',
                fontFamily: 'Open Sans',
                fontSize: "15px",
                textTransform: 'none',
                border: "3px solid #008080",
                backgroundColor: '#ffffff',
                color: '#000000',
                '&:hover': {
                  color: '#008080',
                  border: "3px solid #008080",
                },
              }}
            >Sfoglia i Curriculum</Button>

            < br className='web' />< br className='web' />
            <div className="data"><p className='settings'> Dati di Accesso
              <Button onClick={showForm}
                variant='text' sx={{
                  fontFamily: 'Open Sans',
                  textTransform: "none"
                }}>
                <img src={pencil} alt="pencil icon" width={"10px"} />
                Modifica </Button>
            </p>
            </div>


            < br className='web' />

            <div className='infoGrid'>
              <div className='mailGrid'>Email</div>
              <div className='fieldGrid'>{email}</div>
              <div className='mailGrid'>Password</div>
              <div className='fieldGrid'>*******</div>
            </div>
            <div className='update' id='update'>
              <form onSubmit={handleUpdate} className='updateForm'>
                <div className="update-element">
                  <img src="images/update-persona.png" alt="" className="update-icons" />
                  <input type="email" id="email" name="email" className="update-form-input" placeholder=" " required />
                  <label className="update-floating-label" htmlFor="email">
                    E-mail
                  </label>
                </div>

                <div className="update-element">
                  <img src="images/update-lucchetto.png" alt="" className="update-icons" />
                  <input type="password" id="pass" name="pass" className="update-form-input" placeholder=" " required />
                  <label className="update-floating-label" htmlFor="pass">
                    Password
                  </label>
                </div>
                <div className="update-element">
                  <img src="images/update-lucchetto.png" alt="" className="update-icons" />
                  <input
                    type="password"
                    id="confirm_pass"
                    name="confirm_pass"
                    className="update-form-input"
                    placeholder=" "
                    required
                  />
                  <label className="update-floating-label" htmlFor="confirm_pass">
                    Conferma password
                  </label>
                </div>

                {error && <p className="error">{error}</p>}

                <input type="submit" id="submit" name="submit" value="Conferma" className="update-btn" />
                <Button variant='text'
                  onClick={showForm}
                  sx={{
                    textDecoration: 'underline',
                    fontFamily: 'Open Sans',
                    fontWeight: 'bold',
                    fontSize: '24',
                    textTransform: "none",
                  }}>
                  Annulla </Button>
              </form>

            </div>


          </div>


        </div>
      </div>
    </>
  )
}


function showForm() {
  var show = document.getElementById('update');
  if (show.style.display === "" || show.style.display === "none") {
    show.style.display = "block";
  } else {
    show.style.display = "none";
  }
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
