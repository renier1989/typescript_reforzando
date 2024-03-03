import { create } from "zustand";

interface AuthState {
    status: 'authenticated' | 'unauthenticated' | 'checking';
    token?: string;
    user?: {
        name: string;
        email: string;
    }
}

// esto es la definicion global de un store en Zustand , se podra usar en toda la aplicacion
export const useAuthStore = create<AuthState>()( ( set )=>({
    status: 'checking',
    token: undefined,
    user: undefined
}))