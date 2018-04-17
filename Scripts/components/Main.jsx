import React from 'react';

import PhotoGrid from './PhotoGrid';

const Main = ({ data, onIncreaseLikes }) => (
   <div> 
        {data.map( (item, index) =>{ 

            //item.onIncreaseLikes = onIncreaseLikes
            return <PhotoGrid {...{ item, onIncreaseLikes }} key = { index }/>
        })}
    </div>    
);

export default Main;
