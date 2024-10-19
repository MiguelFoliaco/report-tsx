/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Fragment, useEffect, useRef } from 'react'
import './App.css'
import { Builder } from './builder'
import { usePage } from './context/usePage'
import { IPage } from './type/IPage'
import { useReactToPrint } from 'react-to-print'
import { ticket_de_venta } from './ticket_de_venta'

// const page1: IPage = {
//   media: {
//     width: '600px',
//     padding: '40px',
//     class: 'pdf-preview',
//   },
//   content: {
//     'Titulo': {
//       type: 'rich-text',
//       props: {
//         text: 'Hola mundo ${name}',
//         data: { name: 'Miguel' }
//       }
//     },
//     'Header': {
//       type: 'container',
//       props: {
//         nodes: ['Titulo']
//       },
//       styles: {
//         container: {
//           backgroundColor: 'red',
//           padding: 10
//         }
//       }
//     },
//     'Tabla': {
//       props: {
//         row: [
//           {
//             field: 'name',
//             headerName: 'Nombre',
//             style: {},
//             width: 'auto'
//           },
//           {
//             field: 'price',
//             headerName: 'Precio',
//             style: {},
//             width: 'auto'
//           }
//         ],
//         data: [
//           { id: '2232', price: 10293, name: 'Arroz' },
//           { id: '2884', price: 99999, name: 'Azucar' },
//           { id: '394m', price: 32312, name: 'Cafe' },
//         ],
//       },
//       type: 'table'
//     }
//   },

// }

function App({ page = ticket_de_venta }: { page?: IPage }) {

  const { updatePage, page: _page } = usePage(state => state)
  const keys = (Object.keys(_page?.content || {}) as [keyof typeof page.content])
  const divRef = useRef<HTMLDivElement>(null);
  const reactToPrintFn = useReactToPrint({ contentRef: divRef });
  useEffect(() => {
    updatePage(page)
  }, [updatePage, page])


  if (!_page.content) return null;

  return (
    <div className={`container-pdf-${page.media?.class ?? ''}`}>
      <div ref={divRef} className={page.media?.class} id={page.media?.class} style={{ boxSizing: 'border-box', width: page.media?.width ?? '100%', padding: page.media?.padding }}>
        {
          keys.map(e => (
            <Fragment key={e}>
              {
                //@ts-ignore
                _page.content[e]?.type === 'container' &&
                <Builder
                  //@ts-ignore
                  {..._page.content[e]}
                />
              }
            </Fragment>
          ))
        }
      </div>
      <button className='btn-pdf-print'
        onClick={() => {
          reactToPrintFn()
        }}
      >
        Print
      </button>
    </div>
  )
}

export default App
