import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createTheme } from '@mui/material/styles';
import Airtable from 'airtable';
import "./curriculum.css";

export default function Curriculum(){
    return(
        <div className='curriculum'>
            <div className="lowLayer">
                <div className="upLayer">
                    <div class="rightInfo">
                        <img className="profileImg"></img>
                        <div className="utilities"></div>
                    </div>
                    <div class="curriculumInfo">
                        
                    </div>
                </div>
            </div>
        </div>
    );
}