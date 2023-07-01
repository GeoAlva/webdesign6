import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { createTheme } from '@mui/material/styles';
import Airtable from 'airtable';
import Cookies from 'universal-cookie';
import "./curriculum.css";
import profilePhoto from "../profile/profilePhoto.svg"
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LanguageIcon from '@mui/icons-material/Language';

export default function Curriculum(){

    const cookie = new Cookies();
    const email= cookie.get('email');

    const [message, setMessage] = useState("");
    const [curriculumData, setCurriculumData] = useState([]);

    const filterCurriculum = () => {
        const base = new Airtable({ apiKey: 'keyIXV1obmywgbWZE' }).base('app7EHcO1NO4VD6sc');
      
        

        const filterOptions = {
          filterByFormula: `Email = '${email}'`,
        };
      
        base('Curriculum').select(filterOptions).firstPage((err, records) => {
          if (err) {
            console.error('Errore durante il recupero dei curriculum filtrati:', err);
            return;
          }
      
          const filteredData = records.map((record) => {
            
            return {
              id: record.id,
              nome: record.fields.Name,
              cognome: record.fields.Cognome,
              professione: record.fields.professione,
              siglaProvinciale: record.fields.provinciaResidenza,
              dataNascita : record.fields.dataNascita,
              statoRes: record.fields['Stato residenza'],
              indirizzo: record.fields['Indirizzo residenza'],
              CAP: record.fields.CAPresidenza,
              cittàRes: record.fields['Città residenza'],
              tel: record.fields.Telefono,
              fb: record.fields.Facebook,
              ig: record.fields.Instagram,
              yt: record.fields.Youtube,
              sitoWeb: record.fields.sitoWebPersonale,
              sesso: record.fields.sesso,
              nazionalità: record.fields.nazionalita,

              diploma: record.fields.diploma,
              categoriaDiploma: record.fields.categoriaDiploma,
              indirizzoDiploma: record.fields.indirizzoDiploma,
              liceo: record.fields.nomeIstituto,
              provinciaLiceo: record.fields.provinciaIstituto,
              statoLiceo: record.fields.statoIstituto,
              votoLiceo: record.fields.votoDiploma,
              annoInizioDiploma: record.fields.annoInizioDiploma,
              annoFineDiploma: record.fields.annoFineDiploma,

              laurea: record.fields.laurea,
              tipoLaurea: record.fields.tipoLaurea,
              ambito: record.fields.ambitoLaurea,
              nomeUni: record.fields.nomeUniversita,
              cittaUni: record.fields.cittaUniversita,
              provUni: record.fields.provinciaUniversita,
              statoUni: record.fields.statoUniversita,
              corso: record.fields.corsoLaurea,

              altriStudi2: record.fields.altriStudi2,
              studi2: record.fields.studi2,
              nomeIstitutoStudi2: record.fields.NomeIstitutoStudi2,
              statoIstitutoStudi2: record.fields.statoIstitutoStudi2,
              nomeCorsoStudi2: record.fields.nomeCorsoStudi2,
              votoStudi2: record.fields.votazioneStudi2,
              annoFineStudi2: record.fields.annoFineStudi2,

              altriStudi3: record.fields.altriStudi3,
              studi3: record.fields.studi3,
              nomeIstitutoStudi3: record.fields.NomeIstitutoStudi3,
              statoIstitutoStudi3: record.fields.statoIstitutoStudi3,
              nomeCorsoStudi3: record.fields.nomeCorsoStudi3,
              votoStudi3: record.fields.votazioneStudi3,
              annoFineStudi3: record.fields.annoFineStudi3,

              altriStudi4: record.fields.altriStudi4,
              studi4: record.fields.studi4,
              nomeIstitutoStudi4: record.fields.NomeIstitutoStudi4,
              statoIstitutoStudi4: record.fields.statoIstitutoStudi4,
              nomeCorsoStudi4: record.fields.nomeCorsoStudi4,
              votoStudi4: record.fields.votazioneStudi4,
              annoFineStudi4: record.fields.annoFineStudi4,

              esp1: record.fields.esp1,
              mansione1: record.fields.mansione1,
              datore1: record.fields.datore1,
              cittaEsp1: record.fields.cittaEsp1,
              statoEsp1: record.fields.statoEsp1,

              esp2: record.fields.esp2,
              mansione2: record.fields.mansione2,
              datore2: record.fields.datore2,
              cittaEsp2: record.fields.cittaEsp2,
              statoEsp2: record.fields.statoEsp2,

              esp3: record.fields.esp3,
              mansione3: record.fields.mansione3,
              datore3: record.fields.datore3,
              cittaEsp3: record.fields.cittaEsp3,
              statoEsp3: record.fields.statoEsp3,

              esp4: record.fields.esp4,
              mansione4: record.fields.mansione4,
              datore4: record.fields.datore4,
              cittaEsp4: record.fields.cittaEsp4,
              statoEsp4: record.fields.statoEsp4,



              tipoLavoro: record.fields.tipoLavoro,
              posizioneLavoro: record.fields.posizioneLavoro,
              disponibilita: record.fields.disponibilitaLavoro,
              disposizione: record.fields.disposizioneLavoro,
            };
          });
      
          setCurriculumData(filteredData);
      
          if (filteredData.length === 0) {
            setMessage("NOT FOUND");
          } else {
            setMessage("");
          }
        });
      };

      useEffect(() => {
        filterCurriculum();
      }, []);

    return(
        <div className='curriculum'>
            <div className="lowLayer">
                <div className="upLayer">
                
                    <div class="leftInfo">
                        <div className="profile">
                            <img className="profileImg" src={profilePhoto} alt="Profile"></img>
                            {curriculumData.map((curriculum) => (
                            <div class="utilities">
                                <p className="nome_cognome">{curriculum.nome} {curriculum.cognome}</p>
                                <p classname="profesione">{curriculum.professione}</p>
                                <p className="data">{curriculum.dataNascita}</p>
                            </div>
                            ))}
                        </div>
                        <div className="container">
                            {curriculumData.map((curriculum) => (
                            <div className="dataContainer"> 
                                <p className="contatti">Contatti</p>
                                    <div class="utilsData">
                                        <LocationOnIcon sx={{color:"#087A87"}}></LocationOnIcon>
                                        <div style={{display:"flex", flexDirection:"column"}}>
                                            <p class="utilsDescription">{curriculum.indirizzo}</p>
                                            <p class="utilsDescription">{curriculum.CAP} {curriculum.cittàRes} ({curriculum.siglaProvinciale})</p>
                                            <p class="utilsDescription">{curriculum.statoRes}</p>
                                        </div>
                                    </div>
                                    <div class="utilsData"><PhoneIcon sx={{color:"#087A87"}}></PhoneIcon><p class="utilsDescription">{curriculum.tel}</p></div>
                                    <div class="utilsData"><EmailIcon sx={{color:"#087A87"}}></EmailIcon> <p class="utilsDescription">{email}</p></div>
                                    <div class="utilsData"><LanguageIcon sx={{color:"#087A87"}}></LanguageIcon><p class="utilsDescription">{curriculum.sitoWeb}</p></div>
                            </div>
                            ))}
                            <div>
                                <p className="lingue" style={{marginLeft:"10px"}}>Lingue</p>
                                <div></div>
                            </div>
                            {curriculumData.map((curriculum) => (
                            <div className="dataContainer">
                                <p className="lingue">Social</p>
                                <div class="utilsData"><img src="images/facebook.png" class="image"></img><p class="utilsDescription">{curriculum.fb}</p></div>
                                <div class="utilsData"><img src="images/twitter.png" class="image"></img><p class="utilsDescription">{curriculum.fb}</p></div>
                                <div class="utilsData"><img src="images/instagram.png" class="image"></img><p class="utilsDescription">{curriculum.ig}</p></div>
                                <div class="utilsData"><img src="images/youtube.png" class="image"></img><p class="utilsDescription">{curriculum.yt}</p></div>
                            </div>
                            ))}
                            <div>
                                <p className="lingue" style={{marginLeft:"10px"}}>Hobby</p>
                            </div>
                        </div>
                    </div>
                    <div class="rightInfo">
                        {curriculumData.map((curriculum) => (
                        <p className="sesso">Sesso: {curriculum.sesso} / Nazionalità: {curriculum.nazionalità}</p>
                        ))}
                        <div>

                            <br></br>

                            <div class="section">
                                <h1 className="titleSez"><img src="images/istruzione.png" class="icon"></img>Istruzione e formazione</h1>
                                <div>

                                    {curriculumData.altriStudi4 = "Sì" ? (
                                    curriculumData.map((curriculum) => (
                                        <div class="maturità">
                                            
                                            <p style={{fontWeight:"bold"}}>{curriculum.studi4}</p>
                                            <p>{curriculum.nomeIstitutoStudi4}</p>
                                            <p>{curriculum.nomeCorsoStudi4}</p>
                                            <p>Valutazione: {curriculum.votoStudi4}</p>
                                            <p>{curriculum.statoIstitutoStudi4}</p>
                                            <br></br>
                                        </div>
                                    ))) : (<div></div>)}

                                    {curriculumData.altriStudi3 = "Sì" ? (
                                    curriculumData.map((curriculum) => (
                                        <div class="maturità">
                                            
                                            <p style={{fontWeight:"bold"}}>{curriculum.studi3}</p>
                                            <p>{curriculum.nomeIstitutoStudi3}</p>
                                            <p>{curriculum.nomeCorsoStudi3}</p>
                                            <p>Valutazione: {curriculum.votoStudi3}</p>
                                            <p>{curriculum.statoIstitutoStudi3}</p>
                                            <br></br>
                                        </div>
                                    ))) : (<div></div>)}

                                    {curriculumData.altriStudi2 = "Sì" ? (
                                    curriculumData.map((curriculum) => (
                                        <div class="maturità">
                                            
                                            <p style={{fontWeight:"bold"}}>{curriculum.studi2}</p>
                                            <p>{curriculum.nomeIstitutoStudi2}</p>
                                            <p>{curriculum.nomeCorsoStudi2}</p>
                                            <p>Valutazione: {curriculum.votoStudi2}</p>
                                            <p>{curriculum.statoIstitutoStudi2}</p>
                                            <br></br>
                                        </div>
                                    ))) : (<div></div>)}

                                    {curriculumData.laurea != "No" ? (
                                    curriculumData.map((curriculum) => (
                                        <div class="maturità">
                                            
                                            <p style={{fontWeight:"bold"}}>{curriculum.tipoLaurea}</p>
                                            <p>{curriculum.corso}</p>
                                            <p>{curriculum.ambito}</p>
                                            <p>{curriculum.nomeUni}</p>
                                            <p>{curriculum.cittaUni}({curriculum.provUni}) , {curriculum.statoUni}</p>
                                            <p>Valutazione: {curriculum.votoLiceo}/100</p>
                                            <br></br>
                                        </div>
                                    ))) : (<div></div>)}
                                    
                                    {curriculumData.diploma = "Sì" ? (
                                    curriculumData.map((curriculum) => (
                                        <div class="maturità">
                                            
                                            <p style={{fontWeight:"bold"}}>Diploma di maturità</p>
                                            <p>{curriculum.categoriaDiploma} {curriculum.indirizzoDiploma} {curriculum.liceo}</p>
                                            <p>{curriculum.provinciaLiceo} , {curriculum.statoLiceo}</p>
                                            <p>Valutazione: {curriculum.votoLiceo}/100</p>
                                            <br></br>
                                        </div>
                                    ))) : (<div></div>)}

                                </div>
                            </div>

                            {curriculumData.map((curriculum) => (
                             <div class="section">
                                <h1 className="titleSez"><img src="images/competenze.png" class="icon"></img>Competenze</h1>
                                <div>

                                    <div class="maturità">
                                        <p style={{fontWeight:"bold"}}>Diploma di maturità</p>
                                        <p>{curriculum.liceo}</p>
                                        <p>{curriculum.provinciaLiceo} , {curriculum.statoLiceo}</p>
                                        <p>Valutazione: {curriculum.votoLiceo}/100</p>
                                    </div>

                                </div>
                            </div>
                            ))}
                           
                            {curriculumData.map((curriculum) => (
                            <div class="section">
                                <h1 className="titleSez"><img src="images/lavoro.png" class="icon"></img>Esperienze lavorative</h1>
                                <div>
                                    
                                    {curriculumData.esp1 = "Sì" ? (
                                    curriculumData.map((curriculum) => (
                                        <div class="maturità">
                                            
                                            <p style={{fontWeight:"bold"}}>{curriculum.mansione1}</p>
                                            <p>{curriculum.datore1}</p>
                                            <p>{curriculum.cittaEsp1} , {curriculum.statoEsp1}</p>
                                            <br></br>
                                        </div>
                                    ))) : (<div></div>)}

                                    {curriculumData.esp2 = "Sì" ? (
                                    curriculumData.map((curriculum) => (
                                        <div class="maturità">
                                            
                                            <p style={{fontWeight:"bold"}}>{curriculum.mansione2}</p>
                                            <p>{curriculum.datore2}</p>
                                            <p>{curriculum.cittaEsp2} , {curriculum.statoEsp2}</p>
                                            <br></br>
                                        </div>
                                    ))) : (<div></div>)}

                                    {curriculumData.esp3 = "Sì" ? (
                                    curriculumData.map((curriculum) => (
                                        <div class="maturità">
                                            
                                            <p style={{fontWeight:"bold"}}>{curriculum.mansione3}</p>
                                            <p>{curriculum.datore3}</p>
                                            <p>{curriculum.cittaEsp3} , {curriculum.statoEsp3}</p>
                                            <br></br>
                                        </div>
                                    ))) : (<div></div>)}

                                    {curriculumData.esp4 = "Sì" ? (
                                    curriculumData.map((curriculum) => (
                                        <div class="maturità">
                                            
                                            <p style={{fontWeight:"bold"}}>{curriculum.mansione4}</p>
                                            <p>{curriculum.datore4}</p>
                                            <p>{curriculum.cittaEsp4} , {curriculum.statoEsp4}</p>
                                            
                                        </div>
                                    ))) : (<div></div>)}

                                </div>
                            </div>
                            ))}
                            {curriculumData.map((curriculum) => (
                            <div class="section">
                                <h1 className="titleSez"><img src="images/esp-extra.png" class="icon"></img>Esperienze extra lavorative</h1>
                                <div>
                                    
                                    <div class="maturità">
                                        <p style={{fontWeight:"bold"}}>Diploma di maturità</p>
                                        <p>{curriculum.liceo}</p>
                                        <p>{curriculum.provinciaLiceo} , {curriculum.statoLiceo}</p>
                                        <p>Valutazione: {curriculum.votoLiceo}/100</p>
                                    </div>
                                    <br></br>
                                </div>
                            </div>
                            ))}
                            {curriculumData.map((curriculum) => (
                            <div class="section">
                                <h1 className="titleSez"><img src="images/info.png" class="icon"></img>Altre informazioni</h1>
                                <div>
                                    <div class="maturità">
                                        <div style={{display:"flex"}}><p class="altreInfo">In cerca di lavoro</p><p class="altreInfo" style={{fontWeight:"bold"}}>{curriculum.tipoLavoro}</p></div>
                                        <div style={{display:"flex"}}><p class="altreInfo">Disponibile a lavorare</p><p style={{fontWeight:"bold"}}>{curriculum.posizioneLavoro}</p></div>
                                        <div style={{display:"flex"}}><p class="altreInfo">Posso iniziare a lavorare</p><p style={{fontWeight:"bold"}}>{curriculum.disponibilita}</p></div>
                                        <p style={{fontWeight:"bold"}}>{curriculum.disposizione}</p>
                                    </div>
                                    <br></br>
                                    <br></br>
                                </div>
                            </div>
                            ))}
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
        )
    ;
}