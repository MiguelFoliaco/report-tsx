import { IPage } from "./type/IPage";

export const ticket_de_venta: IPage = {
    media: {
        width: '330px',
        class: 'pdf-preview'
    },
    content: {
        'Logo': {
            type: 'image',
            props: {
                src: 'https://foliacos.tech/.netlify/images?url=https%3A%2F%2Fcogynngpmmcgfxiimtnc.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fimages%2Fportafolio%2FTypescript_logo_2020.svg.png&w=1000&h=2000&q=90',
                height: 200,
                width: 200,
            }
        },
        'Title And Date': {
            type: 'rich-text',
            props: {
                text: `**REPORT TS**  

\${date}`,
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
    }
}