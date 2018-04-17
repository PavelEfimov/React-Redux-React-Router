import React from 'react'; 

import { Link } from 'react-router-dom'; 

import '../../Styles/Title.css';

const Title = () => (
    <div className = 'title' >
        <Link className = 'title-name' to = '/' >REDUXSTAGRAM :)</Link>
    </div>
);

export default Title;