import { Fragment } from 'react'
import { Tab } from '@headlessui/react'

const ButacasPage = () => {
  return (
    <div>
      <header className='bg-red-400 p-4'>
        <p className='text-white'>alize-viajes-turismo.com</p>
      </header>
      <div className='container max-w-6xl mx-auto p-4'>
        <div className='flex border'>
          <div>
            <img className='h-9 w-9' src="https://www.centraldepasajes.com.ar/cdp/img/v5/ic-bus.png" alt="imagen" />
            {/* <BsFillBusFrontFill className='text-4xl' /> */}
          </div>
          <div className='pl-4'>
            <p className='text-xs'>Selecciona tu asiento de <b>IDA</b></p>
            <div className='flex'>
              <p className='text-xs font-semibold'>Corrientes Ter...</p>
              <div className="arrow px-2">
                <img className='w-4 -h4' src="https://www.centraldepasajes.com.ar/cdp/img/v5/ic-arrow-right.png" alt="" />
              </div>
              <p className='text-xs font-semibold'>Posadas Ter...</p>
            </div>
            <div className='flex gap-4'>
              <p className='text-xs'>20/07/2023 21:45</p>
              <p className='text-xs'>1 pasajero</p>
            </div>
          </div>
        </div>

        {/* ESTO CONTIENE LAS BUTACAS*/}
        <div className='p-3'>
          <div>
            <p className='mb-2'>Precios por asiento</p>
            <div className='flex flex-wrap flex-col md:flex-row sticky top-40'>
              <div className='flex gap-2 mb-2 shrink w-40'>
                <div className='w-6 h-6 rounded-md bg-red-400'></div>
                <div>$5.400.00</div>
              </div>
              <div className='flex gap-2 mb-2 shrink w-40'>
                <img className='w-6 h-6 border rounded-md p-1' src="/assets/asiento-ocupado.png" alt="" />
                <div>Ocupado</div>
              </div>
              <div className='flex gap-2 mb-2 shrink w-40'>
                <div className='flex items-center justify-center w-6 h-6 rounded-md border text-xs'>BA</div>
                <div>Baño</div>
              </div>
              <div className='flex gap-2 mb-2 shrink w-40'>
                <div className='flex items-center justify-center w-6 h-6 rounded-md border text-xs'>ES</div>
                <div>Escalera</div>
              </div>
              <div className='flex gap-2 mb-2 shrink w-40'>
                <div className='flex items-center justify-center w-6 h-6 rounded-md border text-xs'>TV</div>
                <div>Televisor</div>
              </div>
            </div>
          </div>
        </div>


        <div className='p-3'>
          <Tab.Group>
            <Tab.List className='flex mb-4'>
              <Tab as={Fragment}>
                {({ selected }) => (
                  /* Use the `selected` state to conditionally style the selected tab. */
                  <button
                    className={selected ? 'px-8 py-4 w-2/4 border-b-4 border-teal-500 outline-none' : 'px-8 py-4 w-2/4'}>
                    Planta Baja
                  </button>
                )}
              </Tab>
              <Tab as={Fragment}>
                {({ selected }) => (
                  /* Use the `selected` state to conditionally style the selected tab. */
                  <button
                    className={
                      selected ? 'px-8 py-4 w-2/4 border-b-4 border-teal-500 outline-none' : 'px-8 py-4 w-2/4'
                    }
                  >
                    Planta Alta
                  </button>
                )}
              </Tab>
            </Tab.List>
            <Tab.Panels>
              <Tab.Panel>
                <div className="baja text-center">
                  <div className="flex justify-center bus">
                    <div className="ruedas"><img src="https://www.centraldepasajes.com.ar/cdp/img/v5/bus/ruedas-izq.png" alt="ruedas" /></div>
                    <div className="planta planta_baja col5">
                      <img className="volante" src="https://www.centraldepasajes.com.ar/cdp/img/v5/bus/bus-volante.png" alt="volante" />

                      <div id="tb501" className="grid empty">
                        <a id="b5_01" href="#">
                        </a>
                      </div>
                      <div id="tb401" className="grid text">
                        <a id="b4_01" href="#">BA</a>
                      </div>

                      <div id="tb301" className="grid empty"><a id="b3_01" href="#"></a></div>
                      <div id="tb201" className="  empty"><a id="b2_01" href="#"></a></div>
                      <div id="tb101" className="grid text"><a id="b1_01" href="#">ES</a></div>

                      <div id="tb502" className="grid empty"><a id="b5_02" href="#"></a></div>
                      <div id="tb402" className="grid text"><a id="b4_02" href="#">TV</a></div>
                      <div id="tb302" className="grid empty"><a id="b3_02" href="#"></a></div>
                      <div id="tb202" className="grid empty"><a id="b2_02" href="#"></a></div>
                      <div id="tb102" className="grid text"><a id="b1_02" href="#">PU</a></div>

                      <div id="tb503" className="grid ocup"><a id="b5_03" href="#">49</a></div>
                      <div id="tb403" className="grid ocup"><a id="b4_03" href="#">48</a></div>
                      <div id="tb303" className="grid empty"><a id="b3_03" href="#"></a></div>
                      <div id="tb203" className="grid empty"><a id="b2_03" href="#"></a></div>
                      <div id="tb103" className="grid ocup"><a id="b1_03" href="#">47</a></div>

                      <div id="tb504" className="grid ocup"><a id="b5_04" href="#">52</a></div>
                      <div id="tb404" className="grid ocup"><a id="b4_04" href="#">51</a></div>
                      <div id="tb304" className="grid empty"><a id="b3_04" href="#"></a></div>
                      <div id="tb204" className="grid empty"><a id="b2_04" href="#"></a></div>
                      <div id="tb104" className="grid ocup"><a id="b1_04" href="#">50</a></div>

                      <div id="tb505" className="grid ocup"><a id="b5_05" href="#">55</a></div>
                      <div id="tb405" className="grid ocup"><a id="b4_05" href="#">54</a></div>
                      <div id="tb305" className="grid empty"><a id="b3_05" href="#"></a></div>
                      <div id="tb205" className="grid empty"><a id="b2_05" href="#"></a></div>
                      <div id="tb105" className="grid ocup"><a id="b1_05" href="#">53</a></div>

                      <div id="tb506" className="grid ocup"><a id="b5_06" href="#">58</a></div>
                      <div id="tb406" className="grid ocup"><a id="b4_06" href="#">57</a></div>
                      <div id="tb306" className="grid empty"><a id="b3_06" href="#"></a></div>
                      <div id="tb206" className="grid empty"><a id="b2_06" href="#"></a></div>
                      <div id="tb106" className="grid ocup"><a id="b1_06" href="#">56</a></div>

                      <div id="tb507" className="grid empty"><a id="b5_07" href="#"></a></div>
                      <div id="tb407" className="grid empty"><a id="b4_07" href="#"></a></div>
                      <div id="tb307" className="grid empty"><a id="b3_07" href="#"></a></div>
                      <div id="tb207" className="grid empty"><a id="b2_07" href="#"></a></div>
                      <div id="tb107" className="grid empty"><a id="b1_07" href="#"></a></div>

                      <div id="tb508" className="grid empty"><a id="b5_08" href="#"></a></div>
                      <div id="tb408" className="grid empty"><a id="b4_08" href="#"></a></div>
                      <div id="tb308" className="grid empty"><a id="b3_08" href="#"></a></div>
                      <div id="tb208" className="grid empty"><a id="b2_08" href="#"></a></div>
                      <div id="tb108" className="grid empty"><a id="b1_08" href="#"></a></div>

                      <div id="tb509" className="grid empty"><a id="b5_09" href="#"></a></div>
                      <div id="tb409" className="grid empty"><a id="b4_09" href="#"></a></div>
                      <div id="tb309" className="grid empty"><a id="b3_09" href="#"></a></div>
                      <div id="tb209" className="grid empty"><a id="b2_09" href="#"></a></div>
                      <div id="tb109" className="grid empty"><a id="b1_09" href="#"></a></div>

                      <div id="tb510" className="grid empty"><a id="b5_10" href="#"></a></div>
                      <div id="tb410" className="grid empty"><a id="b4_10" href="#"></a></div>
                      <div id="tb310" className="grid empty"><a id="b3_10" href="#"></a></div>
                      <div id="tb210" className="grid empty"><a id="b2_10" href="#"></a></div>
                      <div id="tb110" className="grid empty"><a id="b1_10" href="#"></a></div>

                      <div id="tb511" className="grid empty"><a id="b5_11" href="#"></a></div>
                      <div id="tb411" className="grid empty"><a id="b4_11" href="#"></a></div>
                      <div id="tb311" className="grid empty"><a id="b3_11" href="#"></a></div>
                      <div id="tb211" className="grid empty"><a id="b2_11" href="#"></a></div>
                      <div id="tb111" className="grid empty"><a id="b1_11" href="#"></a></div>

                    </div>
                    <div className="ruedas">
                      <img src="https://www.centraldepasajes.com.ar/cdp/img/v5/bus/ruedas-der.png" alt="ruedas" />
                    </div>
                  </div>
                  <img className="block my-0 mx-auto" src="https://www.centraldepasajes.com.ar/cdp/img/v5/bus/bus-backlights.png" alt="luces" />
                </div>
              </Tab.Panel>

              <Tab.Panel>
                <div className="alta text-center">
                  <div className="flex justify-center bus">
                    <div className="ruedas">
                      <img src="https://www.centraldepasajes.com.ar/cdp/img/v5/bus/ruedas-izq.png" alt="ruedas" />
                    </div>
                    <div className="planta planta_alta col5">
                      <div id="ta501" className="grid empty"><a id="a5_01" href="#"></a></div>
                      <div id="ta401" className="grid empty"><a id="a4_01" href="#"></a></div>
                      <div id="ta301" className="grid text"><a id="a3_01" href="#">TV</a></div>
                      <div id="ta201" className="grid empty"><a id="a2_01" href="#"></a></div>
                      <div id="ta101" className="grid empty"><a id="a1_01" href="#"></a></div>

                      <div id="ta502" className="grid free"><a id="a5_02" title="$ 5400.00" href="#">1</a></div>
                      <div id="ta402" className="grid ocup"><a id="a4_02" href="#">2</a></div>
                      <div id="ta302" className="grid empty"><a id="a3_02" href="#"></a></div>
                      <div id="ta202" className="grid free"><a id="a2_02" title="$ 5400.00" href="#">3</a></div>
                      <div id="ta102" className="grid ocup"><a id="a1_02" href="#">4</a></div>

                      <div id="ta503" className="grid ocup"><a id="a5_03" href="#">5</a></div>
                      <div id="ta403" className="grid ocup"><a id="a4_03" href="#">6</a></div>
                      <div id="ta303" className="grid empty"><a id="a3_03" href="#"></a></div>
                      <div id="ta203" className="grid empty"><a id="a2_03" href="#"></a></div>
                      <div id="ta103" className="grid empty"><a id="a1_03" href="#"></a></div>

                      <div id="ta504" className="grid ocup"><a id="a5_04" href="#">7</a></div>
                      <div id="ta404" className="grid ocup"><a id="a4_04" href="#">8</a></div>
                      <div id="ta304" className="grid empty"><a id="a3_04" href="#"></a></div>
                      <div id="ta204" className="grid empty"><a id="a2_04" href="#"></a></div>
                      <div id="ta104" className="grid empty"><a id="a1_04" href="#"></a></div>

                      <div id="ta505" className="grid free"><a id="a5_05" title="$ 5400.00" href="#">9</a></div>
                      <div id="ta405" className="grid free"><a id="a4_05" title="$ 5400.00" href="#">10</a></div>
                      <div id="ta305" className="grid empty"><a id="a3_05" href="#"></a></div>
                      <div id="ta205" className="grid empty"><a id="a2_05" href="#"></a></div>
                      <div id="ta105" className="grid empty"><a id="a1_05" href="#"></a></div>

                      <div id="ta506" className="grid free"><a id="a5_06" title="$ 5400.00" href="#">11</a></div>
                      <div id="ta406" className="grid free"><a id="a4_06" title="$ 5400.00" href="#">12</a></div>
                      <div id="ta306" className="grid empty"><a id="a3_06" href="#"></a></div>
                      <div id="ta206" className="grid free"><a id="a2_06" title="$ 5400.00" href="#">13</a></div>
                      <div id="ta106" className="grid ocup"><a id="a1_06" href="#">14</a></div>

                      <div id="ta507" className="grid free"><a id="a5_07" title="$ 5400.00" href="#">15</a></div>
                      <div id="ta407" className="grid free"><a id="a4_07" title="$ 5400.00" href="#">16</a></div>
                      <div id="ta307" className="grid empty"><a id="a3_07" href="#"></a></div>
                      <div id="ta207" className="grid free"><a id="a2_07" title="$ 5400.00" href="#">17</a></div>
                      <div id="ta107" className="grid free"><a id="a1_07" title="$ 5400.00" href="#">18</a></div>

                      <div id="ta508" className="grid free"><a id="a5_08" title="$ 5400.00" href="#">19</a></div>
                      <div id="ta408" className="grid free"><a id="a4_08" title="$ 5400.00" href="#">20</a></div>
                      <div id="ta308" className="grid empty"><a id="a3_08" href="#"></a></div>
                      <div id="ta208" className="grid free"><a id="a2_08" title="$ 5400.00" href="#">21</a></div>
                      <div id="ta108" className="grid free"><a id="a1_08" title="$ 5400.00" href="#">22</a></div>

                      <div id="ta509" className="grid free"><a id="a5_09" title="$ 5400.00" href="#">23</a></div>
                      <div id="ta409" className="grid free"><a id="a4_09" title="$ 5400.00" href="#">24</a></div>
                      <div id="ta309" className="grid empty"><a id="a3_09" href="#"></a></div>
                      <div id="ta209" className="grid free"><a id="a2_09" title="$ 5400.00" href="#">25</a></div>
                      <div id="ta109" className="grid free"><a id="a1_09" title="$ 5400.00" href="#">26</a></div>

                      <div id="ta510" className="grid free"><a id="a5_10" title="$ 5400.00" href="#">27</a></div>
                      <div id="ta410" className="grid free"><a id="a4_10" title="$ 5400.00" href="#">28</a></div>
                      <div id="ta310" className="grid empty"><a id="a3_10" href="#"></a></div>
                      <div id="ta210" className="grid free"><a id="a2_10" title="$ 5400.00" href="#">29</a></div>
                      <div id="ta110" className="grid free"><a id="a1_10" title="$ 5400.00" href="#">30</a></div>

                      <div id="ta511" className="grid free"><a id="a5_11" title="$ 5400.00" href="#">31</a></div>
                      <div id="ta411" className="grid free"><a id="a4_11" title="$ 5400.00" href="#">32</a></div>
                      <div id="ta311" className="grid empty"><a id="a3_11" href="#"></a></div>
                      <div id="ta211" className="grid free"><a id="a2_11" title="$ 5400.00" href="#">33</a></div>
                      <div id="ta111" className="grid free"><a id="a1_11" title="$ 5400.00" href="#">34</a></div>

                      <div id="ta512" className="grid free"><a id="a5_12" title="$ 5400.00" href="#">35</a></div>
                      <div id="ta412" className="grid free"><a id="a4_12" title="$ 5400.00" href="#">36</a></div>
                      <div id="ta312" className="grid empty"><a id="a3_12" href="#"></a></div>
                      <div id="ta212" className="grid free"><a id="a2_12" title="$ 5400.00" href="#">37</a></div>
                      <div id="ta112" className="grid free"><a id="a1_12" title="$ 5400.00" href="#">38</a></div>

                      <div id="ta513" className="grid free"><a id="a5_13" title="$ 5400.00" href="#">39</a></div>
                      <div id="ta413" className="grid free"><a id="a4_13" title="$ 5400.00" href="#">40</a></div>
                      <div id="ta313" className="grid empty"><a id="a3_13" href="#"></a></div>
                      <div id="ta213" className="grid free"><a id="a2_13" title="$ 5400.00" href="#">41</a></div>
                      <div id="ta113" className="grid free"><a id="a1_13" title="$ 5400.00" href="#">42</a></div>

                      <div id="ta514" className="grid free"><a id="a5_14" title="$ 5400.00" href="#">43</a></div>
                      <div id="ta414" className="grid free"><a id="a4_14" title="$ 5400.00" href="#">44</a></div>
                      <div id="ta314" className="grid empty"><a id="a3_14" href="#"></a></div>
                      <div id="ta214" className="grid free"><a id="a2_14" title="$ 5400.00" href="#">45</a></div>
                      <div id="ta114" className="grid free"><a id="a1_14" title="$ 5400.00" href="#">46</a></div>

                      <div id="ta515" className="grid empty"><a id="a5_15" href="#"></a></div>
                      <div id="ta415" className="grid empty"><a id="a4_15" href="#"></a></div>
                      <div id="ta315" className="grid empty"><a id="a3_15" href="#"></a></div>
                      <div id="ta215" className="grid empty"><a id="a2_15" href="#"></a></div>
                      <div id="ta115" className="grid empty"><a id="a1_15" href="#"></a></div>
                    </div>
                    <div className="ruedas">
                      <img src="https://www.centraldepasajes.com.ar/cdp/img/v5/bus/ruedas-der.png" alt="ruedas" />
                    </div>
                  </div>
                  <img className="block my-0 mx-auto" src="https://www.centraldepasajes.com.ar/cdp/img/v5/bus/bus-backlights.png" alt="luces" />
                </div>
              </Tab.Panel>

            </Tab.Panels>
          </Tab.Group>
        </div>
        {/* ESTO CONTIENE LOS BOTONES DE VOLVER Y CONTINUAR */}
        {/* <div className='flex flex-wrap gap-3 fixed bottom-0 right-0 left-0 p-3 shadow-2xl shadow-red-800'>
          <button className='py-3 px-6  rounded-md border border-red-400 text-red-400'>Volver</button>
          <button className='py-3 px-6  rounded-md bg-red-400 text-white'>Continuar</button>
        </div> */}
      </div>
    </div >
  )
}

export default ButacasPage;