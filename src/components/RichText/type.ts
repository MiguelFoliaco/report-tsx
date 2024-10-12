import { IComponentBase } from "../../type/IComponentBase";

export type RichTextName = 'rich-text'
export type RichTextProps = {
    text: string;
    data?: Record<string, string | number | boolean>
}
export type RichTextStyle = 'container'
export interface IRichText extends IComponentBase<RichTextName, RichTextProps, RichTextStyle> { }