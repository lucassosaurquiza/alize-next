export interface IPasajes {
    Promociones: null; 
    ClaveSolicitud: string;
    IndiceServicio: number;
    FechaSalida: string;
    FechaLlegada: string;
    Calidad: string;
    Butacas: number;
    Precio: number;
    PrecioMoneda: string;
    Cotizacion: Cotizacion;
    EsInternacional: boolean;
    NombreProveedor: string;
    IdProveedor: number;
    NombreProveedorTransportista: string;
    IdProveedorTransportista: number;
    FechaSalidaPresentacionDia: string;
    FechaSalidaPresentacionHorario: string;
    FechaLlegadaSegunCultura: string;
    FechaSalidaSegunCultura: string;
    FechaLlegadaPresentacionDia: string;
    FechaLlegadaPresentacionHorario: string;
    PrecioParteEntera: number;
    PrecioParteDecimal: number;
    PrecioParteDecimalPresentacion: string;
    IdProveedorVisualizacion: number;
    NombreProveedorVisualizacion: string;
    Duracion: { [key: string]: number };
    DuracionPresentacion: string;
    HoraSalidaParaFiltro: number;
    CompraHabilitada: boolean;
    Logo: null;
    IdGrupoEconomico: number;
    DatosRedireccion: DatosRedireccion;
    AceptaEticket: boolean;
    AceptaBPE: boolean;
}

export interface Cotizacion {
    ARS: number;
    R$: number;
    USD: number;
    EUR: number;
    MXN: number;
    PYG: number;
    PEN: number;
}

export interface DatosRedireccion {
    EsRedireccionable: boolean;
    UrlLogo: null;
    NombreDelSitio: null;
}