
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contacto = () => {

  const redirectToWhatsApp = () => {
    const phoneNumber = "+5491150439157";
    const message = encodeURIComponent(
      "Hola, estoy en la página de VERSA DIGITAL y quiero pedir más información"
    );
    const url = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(url, "_blank");
  };
  
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ocgi27s', 'template_nyhs2eu', form.current, 'y_LzL_RArPzN49bNz')
      .then((result) => {
          window.location.href = "#/enviado"
      }, (error) => {
        window.location.href = "#/error"
      });
  };
 

  return (
    <section className='contacto' id='contacto'>
      <h2>¿Trabajamos juntos?</h2>
      <div className='formulario'>
        <div>
          <form ref={form} onSubmit={sendEmail}>
            <div><p>Nos interesa conocerte, contanos sobre tu negocio y te <br /> brindaremos atención personalizada para cumplir tus objetivos</p></div>
            <div className='nameForm'>
              <input type="text" placeholder='Nombre' name='user_name' required />
            </div>
            <input className='email' type="mail" placeholder='E-mail' name='user_email' required />
            <textarea name="message" id="" cols="30" rows="15" placeholder='Escribe tu mensaje' required></textarea>

      <br/>
      <input type="submit" value="Enviar" />

          </form>

        </div>
      </div>
      <div>
        <div className='redesContacto'>
          <img src="/images/vectores/tel.png" alt="Telefono" />
          <h4>+54-11-3058-9482</h4> <img src="/images/vectores/mail.png" alt="E-mail" />  <h4>info@versadigital.com</h4> <img src="/images/vectores/map.png" alt="Ubicacion" /><h4>CABA - Argentina</h4>
        </div>
        <div className='whats'>
          <button onClick={redirectToWhatsApp}>
            <img src="/images/vectores/whats.png" alt="Whatsapp" /> Whatsapp
          </button>
        </div>
      </div>
    </section>
  )
}

export default Contacto