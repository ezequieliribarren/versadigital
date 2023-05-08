import React from 'react'

const Hoteleria = () => {
  return (
    <div className='subtitleRubro'><h3>Nuestras recomendaciones para tu negocio</h3>
    <div className='rubro'>
<div className='items'>
    <div className='titleRubro'>
        <span className='nroItem'>1.</span><h4>imagen de marca</h4>  
    </div>
<div className='imgRubro'>
    <img src="/images/hoteleria/maskHoteleria.webp" alt="Imagen de Marca" />
</div>
<div className='descripRubro'>
   <p>Destacá, genera confianza y lealtad con una imagen de marca profesional para tu hotel</p> 
</div>
</div>
<div className='linea'></div>
<div className='items'>
    <div className='titleRubro'>
        <span className='nroItem'>2.</span><h4>sitio de presentación</h4>  
    </div>
<div className='imgRubro'>
    <img src="/images/hoteleria/sitioPresentacion.webp" alt="Sitio de presentación" />
</div>
<div className='descripRubro2'>
    <div>
          <p>Creamos el sitio de presentación ideal para tu hotel, 100% personalizado y adaptado a tus necesidades</p> 
    </div>

    <div className='vector1'>
           <img src="/images/vectores/flechaSubir.png" alt="Aumento de precensia" />
    </div>
 <p>Aumenta tu <br/>  presencia en línea</p>
<div className='vector2'>
     <img src="/images/vectores/clientes.png" alt="Atraer Clientes" />
</div>
   <p>Atrae nuevos <br/> clientes</p>
</div>
</div>
<div className='linea2'></div>
<div className='items'>
    <div className='titleRubro'>
        <span className='nroItem'>3.</span><h4>sistema de reservas</h4>  
    </div>
<div className='imgRubro'>
    <img src="/images/hoteleria/turnos.webp" alt="Sistema de reservas" />
</div>
<div className='descripRubro2'>
    <div>
          <p>Suma un blog en tu sitio para construir relaciones más fuertes con tus clientes, compartiendo información relevante</p> 
    </div>

    <div className='vector1'>
           <img src="/images/vectores/calendario.png" alt="Aumento de precensia" />
    </div>
 <p>Aumenta tu <br/>  presencia en línea</p>
<div className='vector2'>
     <img src="/images/vectores/reloj.png" alt="Atraer Clientes" />
</div>
   <p>Atrae nuevos <br/> clientes</p>
</div>
</div>


    </div>
    <div className='contactoRubro'>
    <button><a target="_blank" href="https://wa.me/+5491150439157?text=Hola,%20estoy%20en%20la%20página%20de%20VERSA DIGITAL%20y%20quiero%20 pedir%20más%20información">contactanos</a></button>
    </div>
    </div>
  )
}

export default Hoteleria