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
import pallinoPieno from "./pallinoPieno.svg";
import pallinoVuoto from "./pallinoVuoto.svg";

export default function Curriculum() {

    const cookie = new Cookies();
    const email = cookie.get('email');
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
                    dataNascita: record.fields.dataNascita,
                    statoRes: record.fields.statoResidenza,
                    indirizzo: record.fields.IndirizzoResidenza,
                    CAP: record.fields.CAPresidenza,
                    cittàRes: record.fields.cittaResidenza,
                    sitoWeb: record.fields.sitoWebPersonale,
                    tel: record.fields.Telefono,

                    fb: record.fields.Facebook,
                    twitter: record.fields.Twitter,
                    ig: record.fields.Instagram,
                    yt: record.fields.Youtube,
                    altroSocial1: record.fields.altroSocial1,
                    accountSocial1: record.fields.accountSocial1,
                    altroSocial2: record.fields.altroSocial2,
                    accountSocial2: record.fields.accountSocial2,
                    altroSocial3: record.fields.altroSocial3,
                    accountSocial3: record.fields.accountSocial3,
                    altroSocial4: record.fields.altroSocial4,
                    accountSocial4: record.fields.accountSocial4,

                    foto: record.fields.foto,
                    sesso: record.fields.sesso,
                    nazionalità: record.fields.nazionalita,

                    linguaMadre: record.fields.madrelingua,
                    lingua1: record.fields.lingua1,
                    valLingua1: record.fields.valLingua1,
                    lingua2: record.fields.lingua2,
                    valLingua2: record.fields.valLingua2,
                    lingua3: record.fields.lingua3,
                    valLingua3: record.fields.valLingua3,
                    lingua4: record.fields.lingua4,
                    valLingua4: record.fields.valLingua4,
                    lingua5: record.fields.lingua5,
                    valLingua5: record.fields.valLingua5,
                    lingua6: record.fields.lingua6,
                    valLingua6: record.fields.valLingua6,
                    lingua7: record.fields.lingua7,
                    valLingua7: record.fields.valLingua7,
                    lingua8: record.fields.lingua8,
                    valLingua8: record.fields.valLingua8,
                    lingua9: record.fields.lingua9,
                    valLingua9: record.fields.valLingua9,
                    lingua10: record.fields.lingua10,
                    valLingua10: record.fields.valLingua10,

                    hobby: record.fields.hobby,

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
                    tipoAltriStudi2: record.fields.tipoAltriStudi2,
                    annoInizioStudi2: record.fields.annoInizioStudi2,
                    annoFineStudi2: record.fields.annoFineStudi2,

                    altriStudi3: record.fields.altriStudi3,
                    studi3: record.fields.studi3,
                    nomeIstitutoStudi3: record.fields.NomeIstitutoStudi3,
                    statoIstitutoStudi3: record.fields.statoIstitutoStudi3,
                    nomeCorsoStudi3: record.fields.nomeCorsoStudi3,
                    votoStudi3: record.fields.votazioneStudi3,
                    annoFineStudi3: record.fields.annoFineStudi3,
                    tipoAltriStudi3: record.fields.tipoAltriStudi3,
                    annoInizioStudi3: record.fields.annoInizioStudi3,
                    annoFineStudi3: record.fields.annoFineStudi3,

                    altriStudi4: record.fields.altriStudi4,
                    studi4: record.fields.studi4,
                    nomeIstitutoStudi4: record.fields.NomeIstitutoStudi4,
                    statoIstitutoStudi4: record.fields.statoIstitutoStudi4,
                    nomeCorsoStudi4: record.fields.nomeCorsoStudi4,
                    votoStudi4: record.fields.votazioneStudi4,
                    annoFineStudi4: record.fields.annoFineStudi4,
                    tipoAltriStudi4: record.fields.tipoAltriStudi4,
                    annoInizioStudi4: record.fields.annoInizioStudi4,
                    annoFineStudi4: record.fields.annoFineStudi4,

                    esp1: record.fields.esp1,
                    tipoEsp1: record.fields.tipologiaLavoro1,
                    mansione1: record.fields.mansione1,
                    datore1: record.fields.datore1,
                    cittaEsp1: record.fields.cittaEsp1,
                    statoEsp1: record.fields.statoEsp1,
                    descrizioneEsp1: record.fields.descrizioneEsp1,

                    esp2: record.fields.esp2,
                    tipoEsp2: record.fields.tipologiaLavoro2,
                    mansione2: record.fields.mansione2,
                    datore2: record.fields.datore2,
                    cittaEsp2: record.fields.cittaEsp2,
                    statoEsp2: record.fields.statoEsp2,
                    descrizioneEsp2: record.fields.descrizioneEsp2,

                    esp3: record.fields.esp3,
                    tipoEsp3: record.fields.tipologiaLavoro3,
                    mansione3: record.fields.mansione3,
                    datore3: record.fields.datore3,
                    cittaEsp3: record.fields.cittaEsp3,
                    statoEsp3: record.fields.statoEsp3,
                    descrizioneEsp3: record.fields.descrizioneEsp3,

                    esp4: record.fields.esp4,
                    tipoEsp4: record.fields.tipologiaLavoro4,
                    mansione4: record.fields.mansione4,
                    datore4: record.fields.datore4,
                    cittaEsp4: record.fields.cittaEsp4,
                    statoEsp4: record.fields.statoEsp4,
                    descrizioneEsp4: record.fields.descrizioneEsp4,

                    espExtra1: record.fields.espExtra1,
                    tipoExtra1: record.fields.tipoExtra1,
                    altroTipoExtra1: record.fields.altroTipoExtra1,
                    periodoExtra1: record.fields.periodoExtra1,
                    descrizioneExtra1: record.fields.descrizioneExtra1,

                    espExtra2: record.fields.espExtra2,
                    tipoExtra2: record.fields.tipoExtra2,
                    altroTipoExtra2: record.fields.altroTipoExtra2,
                    periodoExtra2: record.fields.periodoExtra2,
                    descrizioneExtra2: record.fields.descrizioneExtra2,

                    espExtra3: record.fields.espExtra3,
                    tipoExtra3: record.fields.tipoExtra3,
                    altroTipoExtra3: record.fields.altroTipoExtra3,
                    periodoExtra3: record.fields.periodoExtra3,
                    descrizioneExtra3: record.fields.descrizioneExtra3,

                    espExtra4: record.fields.espExtra4,
                    tipoExtra4: record.fields.tipoExtra4,
                    altroTipoExtra4: record.fields.altroTipoExtra4,
                    periodoExtra4: record.fields.periodoExtra4,
                    descrizioneExtra4: record.fields.descrizioneExtra4,

                    tipoLavoro: record.fields.tipoLavoro,
                    posizioneLavoro: record.fields.posizioneLavoro,
                    disponibilita: record.fields.disponibilitaLavoro,
                    disposizione: record.fields.disposizioneLavoro,

                    compDigitale1: record.fields.compDigitale1,
                    valCompDigitale1: record.fields.valCompDigitale1,
                    compDigitale2: record.fields.compDigitale2,
                    valCompDigitale2: record.fields.valCompDigitale2,
                    compDigitale3: record.fields.compDigitale3,
                    valCompDigitale3: record.fields.valCompDigitale3,
                    compDigitale4: record.fields.compDigitale4,
                    valCompDigitale4: record.fields.valCompDigitale4,
                    compDigitale5: record.fields.compDigitale5,
                    valCompDigitale5: record.fields.valCompDigitale5,
                    compDigitale6: record.fields.compDigitale6,
                    valCompDigitale6: record.fields.valCompDigitale6,
                    compDigitale7: record.fields.compDigitale7,
                    valCompDigitale7: record.fields.valCompDigitale7,
                    compDigitale8: record.fields.compDigitale8,
                    valCompDigitale8: record.fields.valCompDigitale8,
                    compDigitale9: record.fields.compDigitale9,
                    valCompDigitale9: record.fields.valCompDigitale9,
                    compDigitale10: record.fields.compDigitale10,
                    valCompDigitale10: record.fields.valCompDigitale10,

                    competenzeComunicative: record.fields.competenzeComunicative,
                    altreCompetenze: record.fields.altreCompetenze,

                    portfolio: record.fields.portfolio,
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

    const stampaPalliniPieni = (n) => {
        const pallini = [];
        for (let i = 0; i < n; i++) {
            pallini.push(<img key={i} src={pallinoPieno} alt="Pallino Pieno" />);
        }
        return pallini;
    };

    const stampaPalliniVuoti = (n) => {
        const pallini = [];
        for (let i = 0; i < 5 - n; i++) {
            pallini.push(<img key={i} src={pallinoVuoto} alt="Pallino Vuoto" />);
        }
        return pallini;
    };

    useEffect(() => {
        filterCurriculum();
    }, []);

    return (
        <div className='curriculum'>
            <div className="lowLayer">
                <div className="upLayer">

                    <div class="leftInfo">
                        <div className="profile">
                            {
                                curriculumData.length === 0 ? (
                                    <img className="profileImg" src={profilePhoto} alt="Profile" />
                                ) : null
                            }
                            {curriculumData.map((curriculum) => {
                                return curriculum.foto != null ? (
                                    <img className="profileImg" src={curriculum.foto[0].url} alt="Profile" />
                                ) : (
                                    <img className="profileImg" src={profilePhoto} alt="Profile" />
                                );
                            })}
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
                                        <LocationOnIcon sx={{ color: "#087A87" }}></LocationOnIcon>
                                        <div style={{ display: "flex", flexDirection: "column" }}>
                                            <p class="utilsDescription">{curriculum.indirizzo}</p>
                                            <p class="utilsDescription">{curriculum.CAP} {curriculum.cittàRes} ({curriculum.siglaProvinciale})</p>
                                            <p class="utilsDescription">{curriculum.statoRes}</p>
                                        </div>
                                    </div>
                                    <div class="utilsData"><PhoneIcon sx={{ color: "#087A87" }}></PhoneIcon><p class="utilsDescription">{curriculum.tel}</p></div>
                                    <div class="utilsData"><EmailIcon sx={{ color: "#087A87" }}></EmailIcon> <p class="utilsDescription">{email}</p></div>
                                    <div class="utilsData"><LanguageIcon sx={{ color: "#087A87" }}></LanguageIcon><p class="utilsDescription">{curriculum.sitoWeb}</p></div>
                                </div>
                            ))}
                            <div className="dataContainer">
                                <p className="lingueTitle" style={{ marginLeft: "10px" }}>Lingue</p>

                                <div style={{ display: "flex", marginTop: "10px" }}>

                                    <div style={{ display: "flex", flexDirection: "column" }}>
                                        {curriculumData.linguaMadre !== "" ? (
                                            curriculumData.map((curriculum) => (
                                                <div style={{ display: "flex", flexDirection: "row" }}><p class="lingue">{curriculum.linguaMadre}</p><p class="lingue">(madrelingua)</p></div>
                                            ))) : (<div></div>)}
                                        {curriculumData.lingua1 !== "" ? (
                                            curriculumData.map((curriculum) => (
                                                <div style={{ display: "flex", flexDirection: "row" }}><p class="lingue">{curriculum.lingua1}</p>{stampaPalliniPieni(curriculum.valLingua1)} {stampaPalliniVuoti(curriculum.valLingua1)}</div>
                                            ))) : (<div></div>)}
                                        {curriculumData.lingua2 !== "" ? (
                                            curriculumData.map((curriculum) => (
                                                <div style={{ display: "flex", flexDirection: "row" }}><p class="lingue">{curriculum.lingua2}</p>{stampaPalliniPieni(curriculum.valLingua2)} {stampaPalliniVuoti(curriculum.valLingua2)}</div>
                                            ))) : (<div></div>)}
                                        {curriculumData.lingua3 !== "" ? (
                                            curriculumData.map((curriculum) => (
                                                <div style={{ display: "flex", flexDirection: "row" }}><p class="lingue">{curriculum.lingua3}</p>{stampaPalliniPieni(curriculum.valLingua3)} {stampaPalliniVuoti(curriculum.valLingua3)}</div>
                                            ))) : (<div></div>)}
                                        {curriculumData.lingua4 !== "" ? (
                                            curriculumData.map((curriculum) => (
                                                <div style={{ display: "flex", flexDirection: "row" }}><p class="lingue">{curriculum.lingua4}</p>{stampaPalliniPieni(curriculum.valLingua4)} {stampaPalliniVuoti(curriculum.valLingua4)}</div>
                                            ))) : (<div></div>)}
                                        {curriculumData.lingua5 !== "" ? (
                                            curriculumData.map((curriculum) => (
                                                <div style={{ display: "flex", flexDirection: "row" }}><p class="lingue">{curriculum.lingua5}</p>{stampaPalliniPieni(curriculum.valLingua5)} {stampaPalliniVuoti(curriculum.valLingua5)}</div>
                                            ))) : (<div></div>)}
                                        {curriculumData.lingua6 !== "" ? (
                                            curriculumData.map((curriculum) => (
                                                <div style={{ display: "flex", flexDirection: "row" }}><p class="lingue">{curriculum.lingua6}</p>{stampaPalliniPieni(curriculum.valLingua6)} {stampaPalliniVuoti(curriculum.valLingua6)}</div>
                                            ))) : (<div></div>)}
                                        {curriculumData.lingua7 !== "" ? (
                                            curriculumData.map((curriculum) => (
                                                <div style={{ display: "flex", flexDirection: "row" }}><p class="lingue">{curriculum.lingua7}</p>{stampaPalliniPieni(curriculum.valLingua7)} {stampaPalliniVuoti(curriculum.valLingua7)}</div>
                                            ))) : (<div></div>)}
                                        {curriculumData.lingua8 !== "" ? (
                                            curriculumData.map((curriculum) => (
                                                <div style={{ display: "flex", flexDirection: "row" }}><p class="lingue">{curriculum.lingua8}</p>{stampaPalliniPieni(curriculum.valLingua8)} {stampaPalliniVuoti(curriculum.valLingua8)}</div>
                                            ))) : (<div></div>)}
                                        {curriculumData.lingua9 !== "" ? (
                                            curriculumData.map((curriculum) => (
                                                <div style={{ display: "flex", flexDirection: "row" }}><p class="lingue">{curriculum.lingua9}</p>{stampaPalliniPieni(curriculum.valLingua9)} {stampaPalliniVuoti(curriculum.valLingua9)}</div>
                                            ))) : (<div></div>)}
                                        {curriculumData.lingua10 !== "" ? (
                                            curriculumData.map((curriculum) => (
                                                <div style={{ display: "flex", flexDirection: "row" }}><p class="lingue">{curriculum.lingua10}</p>{stampaPalliniPieni(curriculum.valLingua10)} {stampaPalliniVuoti(curriculum.valLingua10)}</div>
                                            ))) : (<div></div>)}
                                    </div>

                                    <br></br>
                                </div>
                            </div>
                            {curriculumData.map((curriculum) => (
                                <div className="dataContainer">
                                    <p className="lingueTitle">Social</p>
                                    <br></br>
                                    <div class="utilsData"><img src="images/facebook.png" class="image"></img><p class="utilsDescription">{curriculum.fb}</p></div>
                                    <div class="utilsData"><img src="images/twitter.png" class="image"></img><p class="utilsDescription">{curriculum.twitter}</p></div>
                                    <div class="utilsData"><img src="images/instagram.png" class="image"></img><p class="utilsDescription">{curriculum.ig}</p></div>
                                    <div class="utilsData"><img src="images/youtube.png" class="image"></img><p class="utilsDescription">{curriculum.yt}</p></div>
                                    {curriculumData.altroSocial1 !== "" ? (
                                        curriculumData.map((curriculum) => (
                                            <div style={{ display: "flex", flexDirection: "row" }}><p class="utilsDescription" style={{ marginRight: "10px" }}>{curriculum.altroSocial1}</p><p class="utilsDescription">{curriculum.accountSocial1}</p></div>
                                        ))) : (<div></div>)}
                                    {curriculumData.altroSocial2 !== "" ? (
                                        curriculumData.map((curriculum) => (
                                            <div style={{ display: "flex", flexDirection: "row" }}><p class="utilsDescription" style={{ marginRight: "10px" }}>{curriculum.altroSocial2}</p><p class="utilsDescription">{curriculum.accountSocial2}</p></div>
                                        ))) : (<div></div>)}
                                    {curriculumData.altroSocial3 !== "" ? (
                                        curriculumData.map((curriculum) => (
                                            <div style={{ display: "flex", flexDirection: "row" }}><p class="utilsDescription" style={{ marginRight: "10px" }}>{curriculum.altroSocial3}</p><p class="utilsDescription">{curriculum.accountSocial3}</p></div>
                                        ))) : (<div></div>)}
                                    {curriculumData.altroSocial4 !== "" ? (
                                        curriculumData.map((curriculum) => (
                                            <div style={{ display: "flex", flexDirection: "row" }}><p class="utilsDescription" style={{ marginRight: "10px" }}>{curriculum.altroSocial4}</p><p class="utilsDescription">{curriculum.accountSocial4}</p></div>
                                        ))) : (<div></div>)}
                                </div>
                            ))}
                            <div className="dataContainer">
                                <p className="lingueTitle">Hobby</p>
                                {curriculumData.hobby !== "" ? (
                                    curriculumData.map((curriculum) => (
                                        <div style={{ display: "flex", flexDirection: "row" }}><p class="lingue">{curriculum.hobby}</p></div>
                                    ))) : (<div></div>)}
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
                                <hr />
                                <div>
                                    {curriculumData.map((curriculum) =>
                                        curriculum.altriStudi4 == "Sì" ? (
                                            <div class="maturità">
                                                <p style={{ fontWeight: "bold" }}>{curriculum.studi4}</p>
                                                <p>{curriculum.nomeIstitutoStudi4}</p>
                                                <p>{curriculum.nomeCorsoStudi4}</p>
                                                <p>{curriculum.tipoAltriStudi4}</p>
                                                <p>Valutazione: {curriculum.votoStudi4}</p>
                                                <p>{curriculum.statoIstitutoStudi4}</p>
                                                <br></br>
                                            </div>
                                        ) : (<div></div>))
                                    }


                                    {curriculumData.map((curriculum) =>
                                        curriculum.altriStudi3 == "Sì" ? (
                                            <div class="maturità">
                                                <p style={{ fontWeight: "bold" }}>{curriculum.studi3}</p>
                                                <p>{curriculum.nomeIstitutoStudi3}</p>
                                                <p>{curriculum.nomeCorsoStudi3}</p>
                                                <p>{curriculum.tipoAltriStudi3}</p>
                                                <p>Valutazione: {curriculum.votoStudi3}</p>
                                                <p>{curriculum.statoIstitutoStudi3}</p>
                                                <br></br>
                                            </div>
                                        ) : (<div></div>))
                                    }

                                    {curriculumData.map((curriculum) =>
                                        curriculum.altriStudi2 == "Sì" ? (
                                            <div class="maturità">
                                                <p style={{ fontWeight: "bold" }}>{curriculum.studi2}</p>
                                                <p>{curriculum.nomeIstitutoStudi2}</p>
                                                <p>{curriculum.nomeCorsoStudi2}</p>
                                                <p>{curriculum.tipoAltriStudi2}</p>
                                                <p>Valutazione: {curriculum.votoStudi2}</p>
                                                <p>{curriculum.statoIstitutoStudi2}</p>
                                                <br></br>
                                            </div>
                                        ) : (<div></div>))
                                    }

                                    {curriculumData.map((curriculum) =>
                                        curriculum.laurea == "Sì" ? (
                                            <div class="maturità">
                                                <p style={{ fontWeight: "bold" }}>{curriculum.tipoLaurea}</p>
                                                <p>{curriculum.corso}</p>
                                                <p>{curriculum.ambito}</p>
                                                <p>{curriculum.nomeUni}</p>
                                                <p>{curriculum.cittaUni}({curriculum.provUni}) , {curriculum.statoUni}</p>
                                                <p>Valutazione: {curriculum.votoLiceo}/100</p>
                                                <br></br>
                                            </div>
                                        ) : (<div></div>))
                                    }


                                    {curriculumData.map((curriculum) =>
                                        curriculum.laurea == "Sì" ? (
                                            <div class="maturità">
                                                <p style={{ fontWeight: "bold" }}>Diploma di maturità</p>
                                                <p>{curriculum.categoriaDiploma} {curriculum.indirizzoDiploma} {curriculum.liceo}</p>
                                                <p>{curriculum.provinciaLiceo} , {curriculum.statoLiceo}</p>
                                                <p>Valutazione: {curriculum.votoLiceo}/100</p>
                                                <br></br>
                                            </div>
                                        ) : (<div></div>))
                                    }

                                </div>
                            </div>

                            {curriculumData.map((curriculum) => (
                                <div class="section">
                                    <h1 className="titleSez"><img src="images/competenze.png" class="icon"></img>Competenze</h1>
                                    <hr />
                                    <div class="maturità">

                                        <p style={{ fontWeight: "bold", fontFamily: "Open Sans" }}>Informatiche</p>
                                        <div style={{ display: "flex", flexDirection: "row" }}>

                                            <div style={{ display: "flex", flexDirection: "column" }}>

                                                {curriculumData.compDigitale1 !== "" ? (
                                                    curriculumData.map((curriculum) => (
                                                        <div style={{ display: "flex", flexDirection: "row" }}><p class="comp">{curriculum.compDigitale1}</p>{stampaPalliniPieni(curriculum.valCompDigitale1)} {stampaPalliniVuoti(curriculum.valCompDigitale1)}</div>
                                                    ))) : (<div></div>)}
                                                {curriculumData.compDigitale2 !== "" ? (
                                                    curriculumData.map((curriculum) => (
                                                        <div style={{ display: "flex" }}><p class="comp">{curriculum.compDigitale2}</p>{stampaPalliniPieni(curriculum.valCompDigitale2)} {stampaPalliniVuoti(curriculum.valCompDigitale2)}</div>
                                                    ))) : (<div></div>)}
                                                {curriculumData.compDigitale3 !== "" ? (
                                                    curriculumData.map((curriculum) => (
                                                        <div style={{ display: "flex", flexDirection: "row" }}><p class="comp">{curriculum.compDigitale3}</p>{stampaPalliniPieni(curriculum.valCompDigitale3)} {stampaPalliniVuoti(curriculum.valCompDigitale3)}</div>
                                                    ))) : (<div></div>)}
                                                {curriculumData.compDigitale4 !== "" ? (
                                                    curriculumData.map((curriculum) => (
                                                        <div style={{ display: "flex", flexDirection: "row" }}><p class="comp">{curriculum.compDigitale4}</p>{stampaPalliniPieni(curriculum.valCompDigitale4)} {stampaPalliniVuoti(curriculum.valCompDigitale4)}</div>
                                                    ))) : (<div></div>)}
                                                {curriculumData.compDigitale5 !== "" ? (
                                                    curriculumData.map((curriculum) => (
                                                        <div style={{ display: "flex", flexDirection: "row" }}><p class="comp">{curriculum.compDigitale5}</p>{stampaPalliniPieni(curriculum.valCompDigitale5)} {stampaPalliniVuoti(curriculum.valCompDigitale5)}</div>
                                                    ))) : (<div></div>)}

                                            </div>
                                            <div style={{ display: "flex", flexDirection: "column" }}>

                                                {curriculumData.compDigitale6 !== "" ? (
                                                    curriculumData.map((curriculum) => (
                                                        <div style={{ display: "flex", flexDirection: "row" }}><p class="comp">{curriculum.compDigitale6}</p>{stampaPalliniPieni(curriculum.valCompDigitale6)} {stampaPalliniVuoti(curriculum.valCompDigitale6)}</div>
                                                    ))) : (<div></div>)}
                                                {curriculumData.compDigitale7 !== "" ? (
                                                    curriculumData.map((curriculum) => (
                                                        <div style={{ display: "flex", flexDirection: "row" }}><p class="comp">{curriculum.compDigitale7}</p>{stampaPalliniPieni(curriculum.valCompDigitale7)} {stampaPalliniVuoti(curriculum.valCompDigitale7)}</div>
                                                    ))) : (<div></div>)}
                                                {curriculumData.compDigitale8 !== "" ? (
                                                    curriculumData.map((curriculum) => (
                                                        <div style={{ display: "flex", flexDirection: "row" }}><p class="comp">{curriculum.compDigitale8}</p>{stampaPalliniPieni(curriculum.valCompDigitale8)} {stampaPalliniVuoti(curriculum.valCompDigitale8)}</div>
                                                    ))) : (<div></div>)}
                                                {curriculumData.compDigitale9 !== "" ? (
                                                    curriculumData.map((curriculum) => (
                                                        <div style={{ display: "flex", flexDirection: "row" }}><p class="comp">{curriculum.compDigitale9}</p>{stampaPalliniPieni(curriculum.valCompDigitale9)} {stampaPalliniVuoti(curriculum.valCompDigitale9)}</div>
                                                    ))) : (<div></div>)}
                                                {curriculumData.compDigitale10 !== "" ? (
                                                    curriculumData.map((curriculum) => (
                                                        <div style={{ display: "flex", flexDirection: "row" }}><p class="comp">{curriculum.compDigitale10}</p>{stampaPalliniPieni(curriculum.valCompDigitale10)} {stampaPalliniVuoti(curriculum.valCompDigitale10)}</div>
                                                    ))) : (<div></div>)}

                                            </div>
                                        </div>

                                        {curriculumData.competenzeComunicative !== "" ? (
                                            curriculumData.map((curriculum) => (
                                                <div>
                                                    <br></br>
                                                    <p style={{ fontWeight: "bold", fontFamily: "Open Sans" }}>Comunicative</p>
                                                    <p class="comp">{curriculum.competenzeComunicative}</p>
                                                </div>
                                            ))) : (<div></div>)}


                                        {curriculumData.altreCompetenze !== "" ? (
                                            curriculumData.map((curriculum) => (
                                                <div>
                                                    <br></br>
                                                    <p style={{ fontWeight: "bold", fontFamily: "Open Sans" }}>Altre competenze</p>
                                                    <p class="comp">{curriculum.altreCompetenze}</p>
                                                </div>
                                            ))) : (<div></div>)}
                                    </div>
                                </div>
                            ))}

                            {curriculumData.map((curriculum) => (
                                <div class="section">
                                    <h1 className="titleSez"><img src="images/lavoro.png" class="icon"></img>Esperienze lavorative</h1>
                                    <hr />
                                    <div>

                                        {curriculumData.esp1 = "Sì" ? (
                                            curriculumData.map((curriculum) => (
                                                <div class="maturità">

                                                    <p style={{ fontWeight: "bold" }}>{curriculum.mansione1}</p>
                                                    <p>{curriculum.datore1}</p>
                                                    <p>{curriculum.cittaEsp1} , {curriculum.statoEsp1}</p>
                                                    <br></br>
                                                </div>
                                            ))) : (<div></div>)}

                                        {curriculumData.esp2 = "Sì" ? (
                                            curriculumData.map((curriculum) => (
                                                <div class="maturità">

                                                    <p style={{ fontWeight: "bold" }}>{curriculum.mansione2}</p>
                                                    <p>{curriculum.datore2}</p>
                                                    <p>{curriculum.cittaEsp2} , {curriculum.statoEsp2}</p>
                                                    <br></br>
                                                </div>
                                            ))) : (<div></div>)}

                                        {curriculumData.esp3 = "Sì" ? (
                                            curriculumData.map((curriculum) => (
                                                <div class="maturità">

                                                    <p style={{ fontWeight: "bold" }}>{curriculum.mansione3}</p>
                                                    <p>{curriculum.datore3}</p>
                                                    <p>{curriculum.cittaEsp3} , {curriculum.statoEsp3}</p>
                                                    <br></br>
                                                </div>
                                            ))) : (<div></div>)}

                                        {curriculumData.esp4 = "Sì" ? (
                                            curriculumData.map((curriculum) => (
                                                <div class="maturità">

                                                    <p style={{ fontWeight: "bold" }}>{curriculum.mansione4}</p>
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
                                    <hr />
                                    <div>

                                        {curriculumData.espExtra1 = "Sì" ? (
                                            curriculumData.map((curriculum) => (
                                                <div class="maturità">

                                                    <p style={{ fontWeight: "bold" }}>{curriculum.tipoExtra1}</p>
                                                    <p>{curriculum.descrizioneExtra1}</p>

                                                </div>
                                            ))) : (<div></div>)}
                                        {curriculumData.espExtra2 = "Sì" ? (
                                            curriculumData.map((curriculum) => (
                                                <div class="maturità">

                                                    <p style={{ fontWeight: "bold" }}>{curriculum.tipoExtra2}</p>
                                                    <p>{curriculum.descrizioneExtra2}</p>

                                                </div>
                                            ))) : (<div></div>)}
                                        {curriculumData.espExtra3 = "Sì" ? (
                                            curriculumData.map((curriculum) => (
                                                <div class="maturità">

                                                    <p style={{ fontWeight: "bold" }}>{curriculum.tipoExtra3}</p>
                                                    <p>{curriculum.descrizioneExtra3}</p>

                                                </div>
                                            ))) : (<div></div>)}
                                        {curriculumData.espExtra4 = "Sì" ? (
                                            curriculumData.map((curriculum) => (
                                                <div class="maturità">

                                                    <p style={{ fontWeight: "bold" }}>{curriculum.tipoExtra4}</p>
                                                    <p>{curriculum.descrizioneExtra4}</p>

                                                </div>
                                            ))) : (<div></div>)}
                                    </div>
                                </div>
                            ))}
                            {curriculumData.map((curriculum) => (
                                <div class="section">
                                    <h1 className="titleSez"><img src="images/info.png" class="icon"></img>Altre informazioni</h1>
                                    <hr />
                                    <div>
                                        <div class="maturità">
                                            <div style={{ display: "flex" }}><p class="altreInfo">In cerca di lavoro</p><p class="altreInfo" style={{ fontWeight: "bold" }}>{curriculum.tipoLavoro}</p></div>
                                            <div style={{ display: "flex" }}><p class="altreInfo">Disponibile a lavorare</p><p style={{ fontWeight: "bold" }}>{curriculum.posizioneLavoro}</p></div>
                                            <div style={{ display: "flex" }}><p class="altreInfo">Posso iniziare a lavorare</p><p style={{ fontWeight: "bold" }}>{curriculum.disponibilita}</p></div>
                                            <p style={{ fontWeight: "bold" }}>{curriculum.disposizione}</p>
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