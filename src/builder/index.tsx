/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Component } from './compontens'




export const Builder = (props: { type: keyof typeof Component, props: object }) => {
    const C = Component[props.type]
    return (
        <>
            {
                //@ts-ignore
                <C {...props} />
            }
        </>
    )
}

