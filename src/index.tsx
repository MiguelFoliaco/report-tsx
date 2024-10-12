import { useEffect } from 'react'
import { IPage } from './type/IPage'
import { usePage } from './context/usePage'

export const ReportTsx = ({ page }: { page: IPage }) => {
    const { updatePage, page: _page } = usePage(state => state)
    const keys = Object.keys(_page?.content || {}) as [keyof typeof page.content]

    useEffect(() => {
        updatePage(page)
    }, [page, updatePage])

    console.log(_page)

    if (!_page.content) return null;
    return (
        <div>
            {
                keys.map(e => (
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    //@ts-ignore
                    <Builder  {..._page.content[e]} key={e} />
                ))
            }
        </div>
    )
}
