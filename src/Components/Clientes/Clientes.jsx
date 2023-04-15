import React from 'react'

const Clientes = () => {
  return (
    <section className='clientes' id='clientes'>
               <div className='titleClientes'>
            <span className='span1'>NUESTROS CLIENTES</span> <span className='span2'>NUESTROS CLIENTES </span><h2>NUESTROS CLIENTES</h2> <span className='span3'>NUESTROS CLIENTES</span><span className='span4'>NUESTROS CLIENTES</span>
        </div>

        <div className='itemsClientes'>
            <div className='itemClient'>
              <img src="/images/clientes/cliente1.png" alt="" />
            </div>
            <div className='itemClient'>
            <img src="/images/clientes/cliente2.png" alt="" />
            </div>
            <div className='itemClient'>
            <img src="/images/clientes/cliente3.png" alt="" />
            </div>
        </div>
    </section>
  )
}

export default Clientes