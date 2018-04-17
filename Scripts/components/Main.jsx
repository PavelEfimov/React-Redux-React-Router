import React from 'react';

import PhotoGrid from './PhotoGrid';

import '../../Styles/Main.css';

const Main = ({ data, onIncreaseLikes }) => (
   <div className='main'> 
        { data.map( (item, index) => (
             <PhotoGrid { ...{ item, onIncreaseLikes } } key = { index }/>
        )) }
    </div>    
);

export default Main;
