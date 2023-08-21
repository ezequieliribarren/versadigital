import React, { useState, useEffect } from 'react';

const MensajeError = () => {
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    const redirectTimer = setTimeout(() => {
      window.location.href = 'https://www.versadigital.com.ar/';
    }, 5000);

    const interval = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000); // Actualiza cada 1 segundo

    return () => {
      clearTimeout(redirectTimer);
      clearInterval(interval);
    };
  }, []);

  return (
    <div className='enviado'>
      <div className='enviadoBlank'>
        <h2>¡UPS, HA OCURRIDO UN ERROR!</h2>
        <h3>Por favor, vuelve a intentarlo más tarde</h3>
        <h3>Serás redirigido hacia la página principal en {countdown} segundos...</h3>
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

export default MensajeError;