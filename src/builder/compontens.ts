import { Container, ContainerName, Image, ImageName, RichText, RichTextName, Table, TableName } from "../components";

export type MapNameComponent = RichTextName | ContainerName | ImageName | TableName

export const Component = {
    'rich-text': RichText,
    container: Container,
    'image': Image,
    'table': Table
}