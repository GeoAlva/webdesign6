import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createTheme } from '@mui/material/styles';
import Airtable from 'airtable';
import "./curriculum.css";
import profilePhoto from "../profile/profilePhoto.svg"

export default function Curriculum(){
    return(
        <div className='curriculum'>
            <div className="lowLayer">
                <div className="upLayer">
                    <div class="leftInfo">
                        <div className="profile">
                            <img className="profileImg" src={profilePhoto} alt="Profile"></img>
                            <div class="utilities">
                                <p className="nome_cognome">Nome Cognome</p>
                                <p classname="profesione">Professione</p>
                                <p className="data">gg/mm/aaaa</p>
                            </div>
                        </div>
                        <div className="container">
                            <div>
                                <p className="contatti">Contatti</p>
                            </div>
                            <div>
                                <p className="lingue">Lingue</p>
                            </div>
                            <div>
                                <p className="lingue">Social</p>
                            </div>
                            <div>
                                <p className="lingue">Hobby</p>
                            </div>
                        </div>
                    </div>
                    <div class="rightInfo">
                        <p className="sesso">Sesso:Sesso/Nazionalità:Nazionalità</p>
                        <div>
                            <h1>Istruzione e formazione</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}