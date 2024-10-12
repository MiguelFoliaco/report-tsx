import { IComponentBase } from "../../type/IComponentBase";

export type ImageName = 'image'
export type ImageProps = {
    src: string;
    alt?: string;
    width: number | string;
    height: number | string;
    data?: Record<string, string | number | boolean>
}
export type ImageStyle = 'image' | 'container'
export interface IImage extends IComponentBase<ImageName, ImageProps, ImageStyle> { }