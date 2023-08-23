import React from 'react'
import { BsArrowRightShort } from 'react-icons/bs'

import { Layout } from '@/components/Layout'

export default function QuienesSomos() {
  return (
    <Layout>
      <div className=" border-red-400 lg:ml-72 lg:mr-32 sm:mx-4 sm:my-4">
        {/* SECCION HISTORIA DE ALIZE */}
        <div className=' '>
          <h1 className='font-bold text-center mb-10 text-3xl'>HISTORIA</h1>
          <div className='sm:mb-5 lg:gap-5 md:gap-5 lg:flex'>
            <div className='w-full '>
              <img className='w-full h-full object-cover relative rounded-md mb-10' src="/assets/alize-mountain.remove.jpg" alt="" />
              {/* <img className='hidden h-40 w-full object-cover rounded-md md:block ' src="/assets/alize-federacion-2022.png" alt="" /> */}
            </div>
            <div className='w-full'>
              <p className=' w-full text-center font-semibold md:text-start lg:text-base'>
                "En Alize, somos mucho más que una empresa de viajes y turismo; somos narradores de aventuras, arquitectos de sueños y guías apasionados por descubrir el mundo. Nuestra historia comienza con la visión de conectar corazones curiosos con destinos asombrosos, permitiendo que cada viaje se convierta en una experiencia inolvidable.
                Desde el momento en que eliges Alize para tus aventuras, nos embarcamos en un emocionante viaje juntos. Nos esforzamos por entender tus sueños y aspiraciones de viaje, y trabajamos incansablemente para diseñar itinerarios que se ajusten a tus deseos y necesidades. Cada viaje que organizamos es una obra de arte única, creada con pasión y dedicación.
                Nuestro equipo está formado por viajeros apasionados que han recorrido los rincones más remotos del mundo. Compartimos nuestras experiencias, consejos y conocimientos con entusiasmo, para que tus viajes estén llenos de descubrimientos inesperados y momentos emocionantes.
                En Alize, la atención al detalle es primordial. Cada aspecto de tu viaje, desde la elección del alojamiento hasta las actividades que disfrutarás, se selecciona cuidadosamente para asegurarnos de que tu experiencia sea extraordinaria. Nuestra dedicación a la excelencia nos impulsa a superar tus expectativas en cada paso del camino.
                Valoramos la autenticidad y el respeto por las culturas locales. Cuando viajas con nosotros, te sumerges en la riqueza y la diversidad de cada destino, celebrando la historia y la identidad únicas que hacen que cada lugar sea especial.
                Con Alize, no solo viajas, sino que te conectas con el mundo. Cada viaje es una oportunidad para crecer, aprender y enriquecerte a través de encuentros significativos con diferentes personas y culturas. Estamos comprometidos a ser responsables con el medio ambiente y las comunidades que visitamos, preservando la belleza de nuestro planeta para las generaciones futuras.
                En nuestra familia de viajeros, compartimos la emoción de explorar lo desconocido y crear recuerdos que durarán toda la vida. Estamos emocionados de formar parte de tu historia de viajes y estamos listos para llevarte a lugares lejanos y exquisitos que solo pueden ser descubiertos con Alize.
                Bienvenido a nuestro mundo de maravillas, bienvenido a Alize."
              </p>
            </div>
          </div>
        </div>
        {/* SECCION LINEA DE TIEMPO DE ALIZE */}
        <div className='hidden xl:block '>
          <img className='w-full' src="/assets/alize-bus-linea-de-tiempo.png" alt="" />
        </div>
        {/* SECCION EQUIPO DE ALIZE */}
        <div className=''>
          <h2 className='font-bold text-center mb-14 text-3xl'>Equipo Alize</h2>
          <div className='xl:flex xl:gap-5'>
            <div className='border rounded-md cursor-pointer hover:scale-105 transition-transform duration-300 transform origin-center mb-10'>
              <img className='w-full h-full object-cover rounded-t-md sm:mb-5 md:h-72' src="/assets/marcos.jpg" alt="" />
              <div className='p-3'>
                <p className='font-bold text-lg sm:mb-10 text-red-400'>Marcos Sosa Urquiza</p>
                <p className='font-bold text-sm sm:mb-10'>DIRECTOR GENERAL</p>
                <p className='sm:mb-10'>
                  Como Director General, Marcos Sosa Urquiza desempeña una función fundamental en la organización al establecer la visión estratégica y liderar la toma de decisiones clave para el crecimiento y éxito continuo de la empresa.
                  A través de la supervisión y coordinación de todos los departamentos, incluyendo finanzas, operaciones, recursos humanos y ventas,
                  garantiza la alineación de objetivos y la eficiencia operativa. Su capacidad para anticipar tendencias del mercado, adaptarse a cambios y comunicarse con claridad y persuasión,
                  combinada con su liderazgo inspirador y enfoque en la cultura organizacional, establece las bases para un desempeño sólido y sostenible,
                  consolidando la posición de la empresa en su industria.
                </p>
                <div className='w-full rounded-sm border border-red-400 text-red-400 flex items-center justify-center gap-2'>
                  <button className='items-center'>Leer mas</button>
                  <BsArrowRightShort className='items-center text-center' />
                </div>
              </div>
            </div>
            <div className='border rounded-md cursor-pointer hover:scale-105 transition-transform duration-300 transform origin-center mb-10'>
              <img className='w-full h-full object-cover bg-cover rounded-t-md sm:mb-5 md:h-72' src="/assets/garrafa.jpg" alt="" />
              <div className='p-3'>
                <p className='font-bold text-lg sm:mb-10 text-red-400'>Agustin Artaza</p>
                <p className='font-bold text-sm sm:mb-10'>DIRECTOR COMERCIAL</p>
                <p className='sm:mb-10'>
                  El Director Comercial Agustín Artaza ejerce un papel clave en la empresa al liderar la estrategia comercial,
                  supervisar equipos de ventas y marketing, y establecer relaciones estratégicas con clientes y socios.
                  Mediante la identificación de oportunidades de crecimiento y la implementación de tácticas de ventas innovadoras,
                  dirige el aumento de la cartera de clientes y la expansión del mercado. Su capacidad para comprender las tendencias del mercado,
                  tomar decisiones basadas en datos y comunicar efectivamente, junto con su liderazgo en la gestión de equipos y su enfoque en la satisfacción del cliente,
                  contribuyen a impulsar el éxito y la rentabilidad de la empresa bajo su dirección.
                </p>
                <div className='w-full rounded-sm border border-red-400 text-red-400 flex items-center justify-center gap-2'>
                  <button className='items-center'>Leer mas</button>
                  <BsArrowRightShort className='items-center text-center' />
                </div>
              </div>
            </div>
            <div className='border rounded-md cursor-pointer hover:scale-105 transition-transform duration-300 transform origin-center mb-10'>
              <img className='w-full h-full object-cover bg-cover rounded-t-md sm:mb-5 md:h-72 ' src="/assets/perfil-linkedin.jpg" alt="" />
              <div className='p-3'>
                <p className='font-bold text-lg sm:mb-10 text-red-400'>Lucas Sosa Urquiza</p>
                <p className='font-bold text-sm sm:mb-10'>DIRECTOR DE TECNOLOGIA DE LA INFORMACION</p>
                <p className='sm:mb-10'>
                  El Director de Tecnología (CTO) en una empresa de viajes y turismo, como Lucas Sosa, lidera la estrategia tecnológica de la organización,
                  supervisando el desarrollo y la implementación de sistemas y soluciones que mejoran la eficiencia operativa y la experiencia del cliente.
                  A través de la adopción de tecnologías emergentes y la gestión de equipos multidisciplinarios, dirige la innovación tecnológica, garantiza la seguridad de datos,
                  fomenta la colaboración interdepartamental y utiliza análisis de datos para tomar decisiones informadas.
                  Su enfoque en la dirección estratégica y la gestión efectiva de proyectos contribuye al crecimiento y éxito continuo de la empresa en el dinámico sector del turismo.
                </p>
                <div className='w-full rounded-sm border border-red-400 text-red-400 flex items-center justify-center gap-2'>
                  <button className='items-center'>Leer mas</button>
                  <BsArrowRightShort className='items-center text-center' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
