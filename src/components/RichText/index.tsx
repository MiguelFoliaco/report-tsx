import Markdown from "react-markdown"
import { FC } from "react"
import { IRichText } from "./type"
import { templateString } from "../../utils/templateString"

export const RichText: FC<IRichText> = ({ props, styles }) => {

    return (
        <div style={{ ...styles?.container }}>
            <Markdown>
                {templateString(props.text, (props.data || {}))}
            </Markdown>
        </div>
    )
}
