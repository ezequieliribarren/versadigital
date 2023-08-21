import React, { useEffect } from 'react';

const MensajeEnviado = () => {
  useEffect(() => {
    const redirectTimer = setTimeout(() => {
      window.location.href = 'https://www.versadigital.com.ar/';
    }, 5000); // 5000 ms = 5 segundos

    return () => clearTimeout(redirectTimer);
  }, []);

  return (
    <div className='enviado'>
      <div className='enviadoBlank'>
        <h2>¡GRACIAS POR COMUNICARTE CON NOSOTROS!</h2>
        <h3>Estaremos poniéndonos en contacto lo antes posible</h3>
        <img className='imgEnviado' src="/images/logoNav.png" alt="Logo Versa" /> <h3>Mientras tanto te invitamos a conocer más de nosotros en nuestra web y redes:</h3>
        <div className='enviadoRedes'>
          <a href="https://www.versadigital.com.ar/">Volver</a>
          <a href="https://www.instagram.com/versaalodigital/">
            <img src="/images/vectores/inst.png" alt="Instagram" />
          </a>
          <a href="https://www.facebook.com/profile.php?id=100092003971412">
            <img src="/images/vectores/face.png" alt="Facebook" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default MensajeEnviado;



