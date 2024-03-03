import { create } from "zustand";

interface AuthState {
    status: 'authenticated' | 'unauthenticated' | 'checking';
    token?: string;
    user?: {
        name: string;
        email: string;
    },

    // definicion de metods
    login : (email: string , password: string) => void;
    logout : () => void;

}

// esto es la definicion global de un store en Zustand , se podra usar en toda la aplicacion
export const useAuthStore = create<AuthState>()( ( set )=>({
    status: 'checking',
    token: undefined,
    user: undefined,
    login : (email: string , password: string) => {
        // esto simula una llamada a un Backend, y seteamos con el set el valor obtenido
        set({
            status: 'authenticated',
            token: 'XCV123',
            user: {
                name: 'Renier Vargas',
                email: email
            }
        })
    },
    logout : ()=> {
        // el logout limpiar los parametros
        set({
            status: 'unauthenticated',
            token: undefined,
            user: undefined
        })
    }
}))