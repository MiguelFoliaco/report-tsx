import { create } from "zustand";
import { IPage } from "../type/IPage";

type IPageContext = {
    updatePage: (page: IPage) => void;
    page: IPage;
}
export const usePage = create<IPageContext>((set) => ({
    page: {},
    updatePage: (data) => set({ page: data })
}))