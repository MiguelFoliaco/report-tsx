import { Component } from './compontens'




export const Builder = (props: { type: keyof typeof Component, props: object }) => {
    const C = Component[props.type]
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    return <C {...props} />
}

