import { IContainer, IImage, IRichText } from "../components";
import { ITable } from "../components/Table/type";

export type IPage = {
    content?: Record<string, IRichText | IContainer | IImage | ITable>;
    media?: {
        width?: number | string;
        padding?: string | number;
        class?: string
    }
}