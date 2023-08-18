
import { useRouter } from 'next/router';
import { LOGO_PROVIDER } from '../constants/images'
import { AiFillCreditCard } from 'react-icons/ai';
import Link from 'next/link';


export const CardItem = (pasaje: any) => {
  const router = useRouter();
  console.log(router.query.slug)

  const [
    destino,
    origen,
    id_des,
    id_origen,
    fecha_salida,
    fecha_vuelta = '_'
  ]: any = router.query.slug || []


  return (
    <div>
      <div className='p-4 mb-4 rounded-lg bg-white border-t-8 border-red-500'>
        <div className="flex horario">
          <div className="pr-2 text-left salida">
            <div className="text-sm color-[#777] label">SALE</div>
            <div className="text-xl font-semibold pt-1 hora">{pasaje.FechaSalidaPresentacionHorario}</div>
            <div className="text-sm ciudad">{destino} Terminal</div>
          </div>
          <div className="relative grow text-center min-w-[74px] middle">
            <div className="tiempo-viaje">{pasaje.DuracionPresentacion}</div>
            <div className="py-4 px-4 z-5 w-auto m-auto bg-white relative inline-block icon">
              <img className='h-6 w-6' src="https://www.centraldepasajes.com.ar/cdp/img/v5/ic-bus.png" alt="bus" />
            </div>
            <div className="w-full z-4 absolute border-b top-14 linea"></div>
          </div>
          <div className="pl-2 text-end llegada">
            <div className="label">LLEGA</div>
            <div className="text-xl font-semibold pt-2 hora">{pasaje.FechaLlegadaPresentacionHorario}</div>
            <div className="text-sm ciudad">Posadas Terminal</div>
          </div>
        </div>
        <div className="flex justify-center empresa">
          <div className="pl-12 flex item  gap-10">
            <div className="logo flex gap-10">
              {pasaje?.NombreProveedorVisualizacion}
              {/* @ts-ignore  */}
              <img src={LOGO_PROVIDER[pasaje?.NombreProveedor.trim()]?.url} id="imgLogoEmpresa" className="w-20" alt="Viaja por Emp.Asociadas - Río Uruguay" title="Viaja por Emp.Asociadas - Río Uruguay" />
            </div>
            <div className="flex items-center px-2 servicio bg-gray-800 text-white rounded-xl text-xs">
              <span id="ServiciosListView_ctrl0_ctl00_spnSrv" className="cama">{pasaje.Calidad}</span>
            </div>
          </div>
        </div>


        <div className="w-full flex items-center justify-between gap-14 m-auto pt-6">
          <div className=''>
            <h2 className='text-xs mb-2'>Podes pagar con:</h2>
            <div className='flex gap-2'>
              <div className=' flex flex-col  items-center'>
                <AiFillCreditCard />
                <p className='text-[10px]'>Credito y Debito</p>

              </div>
              <div className='flex flex-col  items-center'>
                <img className='h-4' src="/assets/mp2.png" alt="" />
                <p className='text-[10px]'>Mercado Pago</p>

              </div>
            </div>
          </div>


          <Link href="/servicios/butacas" className="flex justify-evenly items-center border py-2 px-4 gap-5 text-white  text-center bg-red-400 rounded-full">
            <div className="precio flex gap-1">
              <div className="text-xs label">DESDE</div>
              <div className="text-xs valor"><span className='text-xs'>$</span> {pasaje.Precio}</div>
              <div className="text-xs label"><span id="LblLeyendaPrecio">POR PERSONA</span></div>
            </div>
            <img src="https://www.centraldepasajes.com.ar/cdp/img/v5/arrow-right.png" alt="Comprar" className="h-2 w-2 arrow" />
          </Link>

          <div className='flex items-center text-[12px]'>
            Quedan 32 asientos
          </div>
        </div>

      </div>
    </div>
  )
}