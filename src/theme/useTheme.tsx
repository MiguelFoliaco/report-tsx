import { create } from "zustand";
import { ITheme } from "./ITheme";

type IUseTheme = {
    theme: ITheme;
    updateTheme: (data: ITheme) => void;
    mode: 'light' | 'dark';
    setMode: (data: IUseTheme['mode']) => void;
    toggleMode: () => void;
}

const themeDefault: ITheme = {
    palette: {
        primary: {
            light: "#ffffff",
            dark: "",
            normal: "",
            50: "",
            100: "",
            200: "",
            300: "",
            400: "",
            500: "",
            600: "",
            700: "",
            800: "",
            900: ""
        },
        secondary: {
            light: "",
            dark: "",
            normal: "",
            50: "",
            100: "",
            200: "",
            300: "",
            400: "",
            500: "",
            600: "",
            700: "",
            800: "",
            900: ""
        },
        terceary: {
            light: "",
            dark: "",
            normal: "",
            50: "",
            100: "",
            200: "",
            300: "",
            400: "",
            500: "",
            600: "",
            700: "",
            800: "",
            900: ""
        },
        background: {
            light: "",
            dark: "",
            default: "",
            contrast: ""
        },
        text: {
            light: "",
            dark: "",
            default: "",
            contrast: ""
        }
    },
    components: {
        richText: undefined,
        container: undefined,
        table: undefined,
        image: undefined
    }
}

export const useTheme = create<IUseTheme>((set) => ({
    theme: themeDefault,
    updateTheme: (theme) => set({ theme }),
    mode: 'light',
    setMode: (mode) => set({ mode }),
    toggleMode: () => set(state => ({ ...state, mode: state.mode === 'dark' ? 'light' : 'dark' }))
}))