import {create} from "zustand"
import toast from "react-hot-toast";

export const useThemeStore = create((set) =>({
    theme: localStorage.getItem("chat-theme") || "light",

    setTheme: (theme) => {
        localStorage.setItem("chat-theme", theme);
        set({theme});
    }

}))