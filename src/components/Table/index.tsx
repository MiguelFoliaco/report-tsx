/* eslint-disable @typescript-eslint/ban-ts-comment */
import { FC } from "react"
import { ITable } from "./type"
import './table.css'

export const Table: FC<ITable> = ({ props, styles }) => {
    const headers = props.row

    return (
        <div style={{ ...styles?.container }}>
            <table style={{ ...styles?.table }} className="report">
                <thead style={{ ...styles?.header }}>
                    <tr style={{ ...styles?.rowHeader }}>
                        {
                            headers.map(e => (
                                <th style={{ ...styles?.title }} key={`table-head-${e.field}`}>{e.headerName}</th>
                            ))
                        }
                    </tr>
                </thead>
                <tbody style={{ ...styles?.body }}>
                    {
                        props.data.map((e, i) => (
                            <tr style={{ ...styles?.row }} key={`key-tr-body-${JSON.stringify(e)}+${i}`}>
                                {
                                    headers.map(head => (

                                        //@ts-ignore
                                        <td style={{ ...styles?.item }} key={`tbody-item-list-${head.field}-${e[head.field] as string}`}>
                                            {
                                                //@ts-ignore
                                                head?.truncate?.len !== undefined ? (
                                                    //@ts-ignore
                                                    head.truncate.len <= String(e[head.field] as string).length ? String(e[head.field] as string).substring(0, head.truncate.len) + (head.truncate?.end ?? '') : String(e[head.field] as string)
                                                )
                                                    :
                                                    //@ts-ignore
                                                    String(e[head.field] as string)
                                            }
                                        </td>
                                    ))
                                }
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}
