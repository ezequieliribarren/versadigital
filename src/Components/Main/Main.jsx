import React from 'react'
import Header from '../Header/Header'
import Servicios from '../Servicios/Servicios'
import Clientes from '../Clientes/Clientes'
import Nosotros from '../Nosotros/Nosotros'



const Main = () => {
  return (
    <main>
      <Header />
      <Servicios />
      <Clientes />
      <Nosotros />
    </main>
  )
}

export default Main