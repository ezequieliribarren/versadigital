import React from 'react'
import Condicional from '../Condicional/Condicional'
const Header = () => {
  return (
    <div className="header">
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
  <h1><span className="spanH1">¿ </span>CON CUAL DE ESTAS CATEGORIAS <br /> IDENTIFICAS A TU NEGOCIO<span className="spanH1"> ?</span></h1>
<p className='pHeader2'>Clickea en tu rubro para ver nuestras recomendaciones para vos</p>
  <Condicional/>
</div>

    </div>
  )
}

export default Header