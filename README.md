# Report TSX

![report-tsx](https://cogynngpmmcgfxiimtnc.supabase.co/storage/v1/object/public/images/portafolio/report-tsx.png?t=2024-10-21T14%3A20%3A25.634Z)
Este proyecto web consiste en un componente interactivo que permite generar e imprimir documentos en formatos comunes como tickets, facturas, órdenes de compra, entre otros. La funcionalidad clave es un botón que, al ser clicado, envía el contenido del componente visualizado a la impresora del usuario, optimizado para garantizar que el formato del documento sea adecuado para la impresión, sin perder detalles esenciales.


El componente soporta múltiples tipos de documentos, ajustándose dinámicamente para cada formato, lo que lo hace ideal para negocios que manejan diferentes tipos de reportes y documentos administrativos. El sistema está diseñado para ser altamente personalizable, permitiendo configurar detalles como logos, información de la empresa y el formato del documento.


Principales características:
  * Botón de impresión funcional para cualquier documento mostrado en pantalla.
  * Soporte para formatos de reportes como tickets, facturas, órdenes de compra, entre otros.
  * Interfaz intuitiva y fácil de usar, con personalización de datos clave.
  * Compatible con impresoras estándar.
  * Esta descripción puede adaptarse según los detalles más específicos del proyecto o el público objetivo.

```batch
npm i report-tsx
```



#### Creando el objeto
Creamos el objeto de que recive el componente, esta tiene una interfaz llamada `IPage`

```ts

const ticket_de_venta={
    media: {
            width: '400px',
            class: 'white'
            },
    content: {
        'Logo': {
            type: 'image',
            props: {
                src: 'https://foliacos.tech/favicon.png',
                height: 200,
                width: 200,
            }
        },
            'Title And Date': {
                type: 'rich-text',
                props: {
                    text: `** REPORT TS**${ date } `,
                    data: {
                        date: new Date().toISOString()
                    }
                },
                styles: {
                    container: {
                        textAlign: 'center'
                    }
                }
            },
            'List Product': {
                type: 'table',
                props: {
                    row: [
                        {
                            field: 'count',
                            headerName: 'cant',
                        },
                        {
                            field: 'name',
                            headerName: 'Producto',
                            truncate: {
                                len: 13,
                                end: '...'
                            }
                        },
                        {
                            field: 'price',
                            headerName: 'Precio'
                        },
                        {
                            field: 'total',
                            headerName: 'Total'
                        }
                    ],
                    data: [
                        {
                            id: '039202',
                            count: 1,
                            name: 'Galletas Chokis',
                            price: '$15.00',
                            total: '$15.00'
                        },
                        {
                            id: '039203',
                            count: 5,
                            name: 'Mermelada de fresa',
                            price: '$80.00',
                            total: '$400.00'
                        },
                        {
                            id: '039204',
                            count: 2,
                            name: 'Aceite',
                            price: '$15.00',
                            total: '$30.00'
                        }
                    ]
                }
            },
            'Total Cart': {
                type: 'table',
                props: {
                    row: [
                        {
                            field: 'totalText',
                            headerName: '',
                        },
                        {
                            field: 'total',
                            headerName: '',
                        },
                    ],
                    data: [
                        {
                            id: '0304',
                            totalText: 'Total',
                            total: '$435.00'
                        },
                    ]
                },
                styles: {
                    container: {
                        alignSelf: 'flex-end'
                    }
                }
            },
            'Texto de agradecimiento': {
                type: 'rich-text',
                props: {
                    text: '¡Gracias Por Su Compra!'
                },
                styles: {
                    container: {
                        marginTop: '10px'
                    }
                }
            },
            'Container': {
                type: 'container',
                props: {
                    nodes: [
                        'Logo',
                        'Title And Date',
                        'List Product',
                        'Total Cart',
                        'Texto de agradecimiento'
                    ]
                },
                styles: {
                    container: {
                        width: '100%',
                        padding: '10px',
                        display: 'flex',
                        alignItems: 'center',
                        flexDirection: 'column'
                    }
                }
            }
        }}
```


#### Ejemplo de uso del componente
Ahora vamos a utilizar el componente `ReportTSX` y cargar los estilos por defectos para poder mostrar el documento y luego imprimir.

```tsx

import { ReportTsx } from "report-tsx"
import 'report-tsx/dist/index.esm.css' //importamos los estilos por defecto

export const App=()=>{
    return <ReportTsx page={ticket_de_venta} />
}

```