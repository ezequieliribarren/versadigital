import React from 'react'

const Contacto = () => {
  return (
    <section className='contacto' id='contacto'>    
    <h2>¿Trabajamos juntos?</h2>
    <div className='formulario'>
        <div>
            <form action="https://formsubmit.co/info@versadigital.com.ar" method="POST" >
            <div><p>Nos interesa conocerte, contanos sobre tu negocio y te <br /> brindaremos atención personalizada para cumplir tus objetivos</p></div>
                <div className='nameForm'>
                      <input type="text"  placeholder='Nombre' name='Nombre'required/> <input type="text" placeholder='Apellido' name='Apellido' required/>  
                </div>


    <input className='email' type="mail" placeholder='E-mail' name='email' required/> 

<textarea name="consulta" id="" cols="30" rows="15" placeholder='Escribe tu mensaje' required></textarea>

<input className="hiden" type="hiden" name="_next" defaultValue="https://versadigital.com.ar/" />
<input className="hiden" type="hiden" name="_captcha" defaultValue="false" />

<button type='submit'>ENVIAR</button>
            </form>
          
        </div>
    </div>
    <div>
        <div className='redesContacto'>
            <img src="/images/vectores/tel.png" alt="Telefono" />
            <h4>+54-11-3058-9482</h4> <img src="/images/vectores/mail.png" alt="E-mail" />  <h4>info@versadigital.com</h4> <img src="/images/vectores/map.png" alt="Ubicacion" /><h4>CABA - Argentina</h4> 
            </div> 
<div className='whats'>
    <button>
        <a target="_blank" href="https://wa.me/+5491150439157?text=Hola,%20estoy%20en%20la%20página%20de%20VERSA DIGITAL%20y%20quiero%20 pedir%20más%20información">  <img src="/images/vectores/whats.png" alt="Whatsapp"/> Whatsapp</a>
       </button>
</div>
            </div>
    </section>
  )
}

export default Contacto