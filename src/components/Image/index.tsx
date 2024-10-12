import { FC } from "react"
import { IImage } from "./type"
import { templateString } from "../../utils/templateString"

export const Image: FC<IImage> = ({ props, styles }) => {

    return (
        <div style={{ ...styles?.container }}>
            <img width={props.width} height={props.height} style={{ ...styles?.image }} src={templateString(props.src, (props.data || {}))} />
        </div>
    )
}
