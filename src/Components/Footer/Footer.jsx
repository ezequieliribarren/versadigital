import React from 'react'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className="contenedorFoot">
                <div className='siteMap'>
            <a href="#servicios">Servicios</a> 
            <a href="#clientes">Clientes</a> 
            <a href="#nosotros">Nosotros</a>
            </div>

            <div className='imgFoot'>
                  <a href="#"><img src="/images/vectores/versaFoot.png" alt="Versa" /></a>
                  </div>

        <div className='redesFoot'>
          <div className='redes'>
                <div>
                  <a href="https://www.instagram.com/versaalodigital/">@versadigital</a><a href="https://www.instagram.com/versaalodigital/"><img src="/images/vectores/inst.png" alt="Instagram" /></a>
                </div>    
            
            <div>
              <a href="https://www.facebook.com/profile.php?id=100092003971412"><img src="/images/vectores/face.png" alt="Facebook" /></a> <a href="https://www.facebook.com/profile.php?id=100092003971412">versadigital</a> 
            </div> 
          </div>
       
            </div>

              <div className='copyRight'> 
    
            <div className='copyVersa'>
            <p>&copy; [2023] Versa Digital. Todos los derechos reservados.</p>
            <a target='_blank' href="www.freepik.com"> <p>Algunas imágenes utilizadas en este sitio web son de Freepik y están sujetas a sus términos de uso y atribución</p></a>
            </div> 
            </div>
      </div>

    

    </footer>
  )
}

export default Footer