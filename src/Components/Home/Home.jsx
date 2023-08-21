import React, { useState, useEffect } from 'react';

import { SquareLoader } from 'react-spinners';
import Main from '../Main/Main';
import Navbar from '../Navbar/Navbar';
import Contacto from '../Contacto/Contacto';
import Footer from '../Footer/Footer';

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.onload = () => {
      setLoading(false);
    };
  }, []);

  return (
    <div>
      {loading ? (
        <div className='preload'> 
          <SquareLoader color="rgb(255, 255, 255)" size={80}/>
        </div>
      ) : (
        <div>
          <Navbar/>
          <Main/>
          <div className='break'>
            <img src="/images/nosotros/break.png" alt="" />
          </div>
          <Contacto />
          <Footer />
        </div>
      )}
    </div>
  );
};

export default Home;