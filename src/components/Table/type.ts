import { CSSProperties } from "react";
import { IComponentBase } from "../../type/IComponentBase";


export type TableName = 'table';

export type Field = {
    headerName: string;
    field: string;
    width?: number | 'auto';
    style?: { container?: CSSProperties, text?: CSSProperties };
    truncate?: {
        len: number;
        end?: string;
    }
}


export type TableProps = {
    row: Field[];
    data: object[] & { id: string }[]
};
export type TableStyle = 'container' | 'table' | 'header' | 'footer' | 'row' | 'rowHeader' | 'item' | 'text' | 'title' | 'body'
export interface ITable extends IComponentBase<TableName, TableProps, TableStyle> { }