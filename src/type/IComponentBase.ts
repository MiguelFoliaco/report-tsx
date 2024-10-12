import { CSSProperties } from "react";

export interface IComponentBase<Name extends string, Props, MapStyles extends string> {
    type: Name;
    props: Props;
    styles?: Partial<Record<MapStyles, CSSProperties>>;
}