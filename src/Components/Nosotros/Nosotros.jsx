import React from 'react'

const Nosotros = () => {
  return (
    <section className='nosotros' id='nosotros'>
                 <div className='titleNosotros'>
            <span className='span1'>NOSOTROS</span> <span className='span1'>NOSOTROS</span> <span className='span2'>NOSOTROS</span><h2>NOSOTROS</h2> <span className='span3'>NOSOTROS</span><span className='span4'>NOSOTROS</span>
            <span className='span4'>NOSOTROS</span>
        </div>

        <div className='contentNosotros'>
            <div className='misionNos'>
                <div className='imgMision'>
                    <img src="/images/nosotros/cohete.png" alt="Misión" />
                </div>
                <div className='textoMision'>
                    <div><h3>nuestra mision</h3></div>
                    <div><p>En Versa queremos ayudar a emprendimientos y negocios a dar el salto al mundo digital. Nos apasiona brindar soluciones web innovadoras y personalizadas que les permitan crecer y destacar. Queremos ser tu aliado tecnológico y acompañarte en todo el proceso, enfocándonos en la calidad, la creatividad y la atención al cliente. 
<br /> <br />
¡Trabajemos juntos para que tu negocio alcance su máximo potencial en la era digital!</p></div>
                </div>
            </div>
        <div className='equipoNos'>
            <div><h3>equipo</h3></div>
            <div className='descripEquipo'>
                <div className='uxui'>
                        <div >
                    <img src="/images/nosotros/uxuiNos.jpg" alt="Diseñadora UX-UI" />
                </div>
                <div className='cuadrado'>
                    <h4>Magali Biondi <br /> <br /> Diseñadora UX/UI</h4>
                </div>  
                </div>

                <div className='dw'>                
                <div className='cuadrado'>
                    <h4>Ezequiel Iribarren <br /> <br /> Desarollador Web</h4>
                </div>
                        <div>
                    <img src="/images/nosotros/dwNos.jpg" alt="Desarrollador Web " />
                </div>

                </div>
          
            
            </div>
        </div>
        </div>
    </section>

  )
}

export default Nosotros