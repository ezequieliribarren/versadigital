import React from 'react'

const Contacto = () => {

  const redirectToWhatsApp = () => {
    const phoneNumber = "+5491150439157";
    const message = encodeURIComponent(
      "Hola, estoy en la página de VERSA DIGITAL y quiero pedir más información"
    );
    const url = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(url, "_blank");
  };

  return (
    <section className='contacto' id='contacto'>
      <h2>¿Trabajamos juntos?</h2>
      <div className='formulario'>
        <div>
          <form id="contact-form" action="form.php" method="POST" >
            <div><p>Nos interesa conocerte, contanos sobre tu negocio y te <br /> brindaremos atención personalizada para cumplir tus objetivos</p></div>
            <div className='nameForm'>
              <input type="text" placeholder='Nombre' name='nombre' required /> <input type="text" placeholder='apellido' name='Apellido' required />
            </div>
            <input className='email' type="mail" placeholder='E-mail' name='email' required />
            <input class="email" type="tel" placeholder="Teléfono" required name="telefono"/>
            <textarea name="consulta" id="" cols="30" rows="15" placeholder='Escribe tu mensaje' required></textarea>
            <div className="enviar-captcha">
            <div className="g-recaptcha" data-sitekey="6LdJ18MnAAAAAN-yRzct7bxzLNGL796l_nFawdak"></div>
        <button type="submit" id="contact-form-button">ENVIAR</button>
        </div>
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