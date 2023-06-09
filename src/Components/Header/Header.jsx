import React from 'react'
import Condicional from '../Condicional/Condicional'
const Header = () => {
  return (
    <header className="header">
<div className="imgHeader">
    <img src="/images/imgHeader.png" alt="Versa Digital" />
    <div className='contactanos'>
      <button>
      <a target="_blank" href="https://wa.me/+541130589482?text=Hola,%20estoy%20en%20la%20página%20de%20VERSA DIGITAL%20y%20quiero%20 pedir%20más%20información">contactanos</a>
      </button>
      </div>  
    
</div>
<p className='pHeader1'>Brindamos propuestas adaptadas <br /> para cada rubro y necesidad</p>
<div>
  <h1>¿ CON CUAL DE ESTAS CATEGORIAS <br /> IDENTIFICAS A TU NEGOCIO ?</h1>
<p className='pHeader2'>Clickea en tu rubro para ver nuestras recomendaciones para vos</p>
  <Condicional/>
</div>
<a className='whatsFlot' href="https://wa.me/+5491150439157?text=Hola,%20estoy%20en%20la%20página%20de%20VERSA DIGITAL%20y%20quiero%20 pedir%20más%20información"> <img alt="Chatear en Whatsapp" src="/images/whatsFlot.png" /> </a>
    </header>
  )
}

export default Header