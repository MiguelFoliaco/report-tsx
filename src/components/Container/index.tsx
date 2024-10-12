import { FC } from "react"
import { IContainer } from "./type"
import { useBuilder } from "../../builder/useBuilder"

export const Container: FC<IContainer> = ({ props, styles }) => {
    const children = useBuilder(props.nodes)
    return (
        <div style={{ ...styles?.container }}>
            {children}
        </div>
    )
}
