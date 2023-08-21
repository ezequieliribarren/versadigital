import React from 'react'
import Gastronomico from '../Rubros/Gastronomico';
import Profesionales from "../Rubros/Profesionales"
import CentrosDeEntren from "../Rubros/CentrosDeEntren"
import Hoteleria from "../Rubros/Hoteleria"
import Turismo from "../Rubros/Turismo"
import Eventos from "../Rubros/Eventos"
import VentasDeProductos from "../Rubros/VentasDeProductos"
import Veterinarias from "../Rubros/Veterinarias"
import CentrosDeEstetica from "../Rubros/CentrosDeEstetica"
import Artistico from "../Rubros/Artistico"
import Instituciones from "../Rubros/Instituciones"
import CentrosDeSalud from "../Rubros/CentrosDeSalud"
import { useState, useRef  } from 'react'



const Condicional = () => {

  const redirectToWhatsApp = () => {
    const phoneNumber = "+5491150439157";
    const message = encodeURIComponent(
      "Hola, estoy en la página de VERSA DIGITAL y quiero pedir más información"
    );
    const url = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(url, "_blank");
  };


    const FunctionGastronomico = () => {
        return <Gastronomico/>;
      };
      const FunctionCentrosDeSalud = () => {
        return <CentrosDeSalud/>;
      };

      const FunctionProfesionales = () => {
        return <Profesionales/>;
      };

      const FunctionCentrosDeEntrenamiento = () => {
        return <CentrosDeEntren/>;
      };

      const FunctionHoteleria = () => {
        return <Hoteleria/>;
      };

      const FunctionTurismo = () => {
        return <Turismo/>;
      };

      const FunctionEventos = () => {
        return <Eventos/>;
      };

      const FunctionVeterinarias = () => {
        return <Veterinarias/>;
      };

      const FunctionCentrosDeEstetica = () => {
        return <CentrosDeEstetica/>;
      };

      const FunctionArtistico = () => {
        return <Artistico/>;
      };

      const FunctionInstituciones = () => {
        return <Instituciones/>;
      };

      const FunctionVentasDeProductos = () => {
        return <VentasDeProductos/>;
      };

      const handleLimpiar = () => {
        setComponenteActivo(null);

      };

      const divRef = useRef(null);
      const [componenteActivo, setComponenteActivo] = useState(null);

      const handleClick = (componente) => {
        setComponenteActivo(componente);
    

        setTimeout(() => {
          if (divRef.current) {
            divRef.current.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      };

 

  return (
    <div className='condicional'>
        <div className='buttonsCondicional'>
            <div className='buttons1'>
            <button onClick={() => handleClick(FunctionGastronomico)}>Gastronomico</button>
    <button  onClick={() => handleClick(FunctionCentrosDeSalud)}>Centros de Salud</button>
    <button  onClick={() => handleClick(FunctionProfesionales)}>Profesionales</button>
    <button  onClick={() => handleClick(FunctionCentrosDeEntrenamiento)}>Centros de Entrenamiento</button>
    <button  onClick={() => handleClick(FunctionHoteleria)}>Hoteleria</button>
    <button  onClick={() => handleClick(FunctionTurismo)}>Turismo</button>
            </div>

            <div className='buttons2'>
                 <button  onClick={() => handleClick(FunctionEventos)}>Eventos</button>
    <button  onClick={() => handleClick(FunctionVentasDeProductos)}>Ventas de Productos</button>
    <button  onClick={() => handleClick(FunctionVeterinarias)}>Veterinarias</button>
    <button  onClick={() => handleClick(FunctionCentrosDeEstetica)}>Centos de Estetica</button>
    <button  onClick={() => handleClick(FunctionArtistico)}>Artistico</button>
    <button  onClick={() => handleClick(FunctionInstituciones)}>Instituciones</button>
            </div>
        </div>
   <div className='lineaRender'></div>
    <div className='renderCondicional' ref={divRef}>
    {componenteActivo && componenteActivo}
    {componenteActivo ? <div className='contraer'><button onClick={handleLimpiar}>Cerrar</button></div>:""}
    </div>
    <div className='lineaRender2'></div>
    <div className='otroRubro'>
<h3>¿Pertenecés a otro rubro?</h3>
<p>Contanos a qué te dedicás y creamos un plan personalizado.</p>
<div className='contactoRubro'>
<button onClick={redirectToWhatsApp}>
      contactanos
    </button>
    </div>
    </div>
  </div>


  )
  }

export default Condicional