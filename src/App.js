import './App.scss';
import Main from './Components/Main/Main';
import Navbar from './Components/Navbar/Navbar';
import Contacto from './Components/Contacto/Contacto';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div>
  <Navbar/>
  <Main/>
  <div className='break'> 
        <img src="/images/nosotros/break.png" alt="" /></div>
  <Contacto/>
  <Footer/>
    </div>
  );
}

export default App;
