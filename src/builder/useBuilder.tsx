/* eslint-disable @typescript-eslint/ban-ts-comment */
import { usePage } from "../context/usePage";
import { Component } from "./compontens";

export const useBuilder = (names: string[]) => {
    const page = usePage(state => state.page)
    const components = names.map((e, i) => {
        const props = page.content![e]
        const C = Component[props.type];
        return C ?
            //@ts-ignore
            <C {...props} key={e + i} />
            :
            null

    }).flat()


    return <>
        {
            components
        }
    </>
}