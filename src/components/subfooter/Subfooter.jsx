import React, { useRef, useEffect } from 'react';
import happy from '../../img/happy.png';
import './subfooter.css';

const Subfooter = () => {

    /* const firstUpdate = useRef(true);
    useEffect(() => {
      if (firstUpdate.current) {
        firstUpdate.current = false;
        console.log(firstUpdate,'first opening');
        return;
      }
    });

    console.log({firstUpdate}); */


  return (
      <div className='congrats-msg'>
            <h2>Yayy!! You have no tasks!</h2>
            <img src={happy} alt="happy" width="400px" height="400px"/>
      </div>
    );
};

export default Subfooter;
