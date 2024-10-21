import { useReactToPrint } from 'react-to-print'
import { Fragment, ReactNode, useEffect, useRef } from 'react'
import { IPage } from './type/IPage'
import { usePage } from './context/usePage'
import { Builder } from './builder'

export const ReportTsx = ({ page, children }: { page: IPage, children?: ReactNode }) => {

    const { updatePage, page: _page } = usePage(state => state)
    const keys = (Object.keys(_page?.content || {}) as [keyof typeof page.content])
    const divRef = useRef<HTMLDivElement>(null);
    const reactToPrintFn = useReactToPrint({ contentRef: divRef, bodyClass: page.media?.class });
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
                                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                                //@ts-ignore
                                _page.content[e]?.type === 'container' &&
                                <Builder
                                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                                    //@ts-ignore
                                    {..._page.content[e]}
                                />
                            }
                        </Fragment>
                    ))
                }
            </div>
            {
                children ?
                    <div onClick={() => {
                        reactToPrintFn()
                    }}>
                        {children}
                    </div>
                    :
                    <button className='btn-pdf-print'
                        onClick={() => {
                            reactToPrintFn()
                        }}
                    >
                        Print
                    </button>
            }
        </div>
    )
}