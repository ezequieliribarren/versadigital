import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const Nosotros = () => {
  return (
    <section className='nosotros' id='nosotros'>
                 <div className='titleNosotros'>
            <span className='span1'>NOSOTROS</span> <span className='span1'>NOSOTROS</span> <span className='span2'>NOSOTROS</span><h2>NOSOTROS</h2> <span className='span3'>NOSOTROS</span><span className='span4'>NOSOTROS</span>
            <span className='span4'>NOSOTROS</span>
        </div>
        <div className='alineacionNosotros container'>
  <div className='cohete'>    
                  <img src="/images/nosotros/cohete.png" alt="Misión" /></div>      
        <div className='contentNosotros'>      
     
            <div className='misionNos'>     
                <div className='textoMision container'>             
              <h3>nuestra <br /> mision</h3>     
                    <p>En Versa queremos ayudar a emprendimientos y negocios a dar el salto al mundo digital. Nos apasiona brindar soluciones web innovadoras y personalizadas que les permitan crecer y destacar. Queremos ser tu aliado tecnológico y acompañarte en todo el proceso, enfocándonos en la calidad, la creatividad y la atención al cliente. 
<br /> <br />
¡Trabajemos juntos para que tu negocio alcance su máximo potencial en la era digital!</p>
                </div>
            </div>
            <div className='equipoNos'>    
                <div className='textoMision container'>
                  <h3>equipo</h3>
                    <p>Somos un equipo multidisciplinario que trabaja en colaboración para ofrecer soluciones integrales. Estamos comprometidos en comprender las necesidades específicas de cada cliente y adaptar nuestros servicios para alcanzar sus objetivos. Nuestra atención personalizada garantiza una comunicación fluida y eficiente, brindándole la confianza y tranquilidad de que su proyecto estará en manos de profesionales dedicados y apasionados.
</p>
                </div>
            </div>
            <div className='equipo'>
            <Card className='cardEquipo dw'>
            <CardMedia
        component="img"
        alt=""
        height="290"
        image="/images/nosotros/dw.png"
      />
      <CardContent className='contentEquipo'>
      <h4>
        Ezequiel
        </h4>
        <h4 gutterBottom variant="h5" component="div">
        Desarrollador Web
        </h4>
      </CardContent >
    </Card>
    <Card className='cardEquipo ux' >
      <CardMedia
        component="img"
        alt=""
        height="290"
        image="/images/nosotros/ux.png"
      />
      <CardContent className='contentEquipo'>
      <h4>
    Magali
        </h4>
        <h4 gutterBottom variant="h5" component="div">
        Diseñadora 
UX UI
        </h4>
      </CardContent>
    </Card>
    <Card className='cardEquipo cm'>
      <CardMedia
        component="img"
        alt=""
        height="290"
        image="/images/nosotros/cm.png"
      />
      <CardContent className='contentEquipo'>
        <h4>
       Agustina
        </h4>
        <h4 gutterBottom variant="h5" component="div">
        Community Manager
        </h4>
      </CardContent>
    </Card>
            </div>
        {/* <div className='equipoNos'>
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
        </div> */}
        </div>
        </div>

    </section>

  )
}

export default Nosotros