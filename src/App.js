import './App.scss';
import {HashRouter, Route, Routes} from 'react-router-dom';
import Home from './Components/Home/Home';
import MensajeEnviado from './Components/MensajeEnviado/MensajeEnviado';


function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/enviado" element={<MensajeEnviado />} />
      </Routes>
    </HashRouter>
  );
}

export default App;