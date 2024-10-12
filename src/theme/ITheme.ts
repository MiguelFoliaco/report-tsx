import { ReactNode } from "react"
import { ContainerStyle, RichTextStyle } from "../components"

export type variantColorMap = 'light' | 'dark' | 'normal' | '50' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900'
export type variantColorTextAndBackgroundMap = 'default' | 'contrast' | 'dark' | 'light'


export interface IPalette {
    primary: Record<variantColorMap, string>
    secondary: Record<variantColorMap, string>
    terceary: Record<variantColorMap, string>
    background: Record<variantColorTextAndBackgroundMap, string>
    text: Record<variantColorTextAndBackgroundMap, string>
}
export interface IPalettePartial {
    primary: Partial<Record<variantColorMap, string>>
    secondary: Partial<Record<variantColorMap, string>>
    terceary: Partial<Record<variantColorMap, string>>
    background: Partial<Record<variantColorTextAndBackgroundMap, string>>
    text: Partial<Record<variantColorTextAndBackgroundMap, string>>
}
export interface IComponents {
    richText?: {
        Component?: ReactNode;
        styles?: RichTextStyle
    },
    container?: {
        Component?: ReactNode;
        styles?: ContainerStyle
    },
    table?: {
        Component?: ReactNode;
        styles?: any
    },
    image?: {
        Component?: ReactNode;
        styles?: any
    },
}
export interface ITheme {
    palette: IPalette;
    components: IComponents;
}
export interface IThemeConfig {
    palette: Partial<IPalettePartial>
    components: Partial<IComponents>
}