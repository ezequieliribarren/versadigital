import React, { useState } from 'react';
import { Modal, Box } from '@mui/material';

const Clientes = () => {
  const [selectedClient, setSelectedClient] = useState(null);

  const handleOpenModal = (client) => {
    setSelectedClient(client);
  };

  const handleCloseModal = () => {
    setSelectedClient(null);
  };

  const clientesData = [
    {
      id: 1,
      comunity: "community management",
      icoComunity: "/images/clientes/comunity.png",
      web: "sitio web",
      icoWeb: "/images/clientes/web.png",
      link: "",
      image: '/images/clientes/estudioBiondi.png',
      imageModal: "/images/clientes/modalBiondi.png",
      description: '“Con la ayuda de los chicos de Versa Digital, logramos crear una imagen de marca que refleja nuestra dedicación y un sitio web que se convirtió en el puente perfecto para conectar con nuestra audiencia.”',
    },
    {
      id: 2,
      comunity: "community management",
      icoComunity: "/images/clientes/comunity.png",
      web: "sitio web",
      icoWeb: "/images/clientes/web.png",
      link: "",
      image: '/images/clientes/cliente2.png',
      description: 'Descripción del Cliente 2...',
    },
    {
      id: 3,
      comunity: "community management",
      icoComunity: "/images/clientes/comunity.png",
      web: "sitio web",
      icoWeb: "/images/clientes/web.png",
      link: "",
      image: '/images/clientes/cliente3.png',
      description: 'Descripción del Cliente 3...',
    },
    {
      id: 4,
      comunity: "community management",
      icoComunity: "/images/clientes/comunity.png",
      web: "sitio web",
      icoWeb: "/images/clientes/web.png",
      link: "",
      image: '/images/clientes/cliente4.png',
      description: 'Descripción del Cliente 4...',
    },
  ];

  return (
    <section className='clientes' id='clientes'>
      <div className='titleClientes'>
        <span className='span1'>NUESTROS CLIENTES</span> <span className='span2'>NUESTROS CLIENTES </span><h2>NUESTROS CLIENTES</h2> <span className='span3'>NUESTROS CLIENTES</span><span className='span4'>NUESTROS CLIENTES</span>
      </div>

      <div className='itemsClientes'>
        {clientesData.map((cliente) => (
          <div className='itemClient' key={cliente.id} onClick={() => handleOpenModal(cliente)}>
            <img src={cliente.image} alt={cliente.name} />
          </div>
        ))}
      </div>

      <Modal open={selectedClient !== null} onClose={handleCloseModal}>
        <Box sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          bgcolor: 'background.paper',
          boxShadow: 24,
          maxHeight: '95vh', // Añadir esta propiedad para limitar la altura máxima a 90vh
          width: '70%', // Añadir esta propiedad para que la Box ocupe el 90% del ancho
          overflowY: 'auto', // Agregar scroll vertical si es necesario
          '@media (max-width: 600px)': {
            width: '95%', // Reducir el ancho en dispositivos móviles
          },
        }}>
          {selectedClient && (
            <div>
              <div className='servicioModal'>
                <div className='titleServModal'>
                  <div>
                    <img src={selectedClient.icoComunity} alt="" />
                  </div>

                  <h3>{selectedClient.comunity}</h3>
                </div>
                <div className='titleServModal'>
                  <div>
                    <img src={selectedClient.icoWeb} alt="" />
                  </div>

                  <h3>{selectedClient.web}</h3>
                </div>
                <div className='linkCliente'>
                  <button>visitar la web</button>
                </div>
              </div>
              <div className='imgModal'>
                <img src={selectedClient.imageModal} alt={selectedClient.name} />
              </div>
              <div className='descrip-action'>
                <div className='descriptionModal'>
                  <h4>Testimonio del cliente</h4>
                  <p>{selectedClient.description}</p>
                </div>
                <div className='actionModal'>
                  <h4>Vos, ¿ya diste el salto a lo digital?</h4>
                  <button>solicitar presupuesto</button>
                </div>
              </div>

            </div>
          )}
        </Box>
      </Modal>
    </section>
  );
}

export default Clientes;
