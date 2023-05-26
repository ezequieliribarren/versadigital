import './App.scss';
import Main from './Components/Main/Main';
import Navbar from './Components/Navbar/Navbar';
import Contacto from './Components/Contacto/Contacto';
import Footer from './Components/Footer/Footer';
import { useEffect, useState } from 'react';
import { SquareLoader } from 'react-spinners';



function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.onload = () => {
      setLoading(false);
    };
  }, []);
  return (
    <div >
      {loading ? (
        <div className='preload'> 
        <SquareLoader color="rgb(255, 255, 255)" size={80}/></div>
      ) : (
        <div>
          <Navbar />
          <Main />
          <div className='break'>
            <img src="/images/nosotros/break.png" alt="" />
          </div>
          <Contacto />
          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;
