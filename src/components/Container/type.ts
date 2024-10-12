import { IComponentBase } from "../../type/IComponentBase";

export type ContainerName = 'container'
export type ContainerProps = {
    nodes: string[]
}
export type ContainerStyle = 'container'
export interface IContainer extends IComponentBase<ContainerName, ContainerProps, ContainerStyle> { }
