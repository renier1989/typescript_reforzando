import { useEffect } from "react"
import { useAuthStore } from "../store/auth.store"

export const LoginPage = () => {
    // asi es como se consumen los state en un store de Zustand
    const authState = useAuthStore(state => state.status)
    const user = useAuthStore(state => state.user)
    const login = useAuthStore(state => state.login)
    const logout = useAuthStore(state => state.logout)

    useEffect(() => {
        setTimeout(() => {
            logout()
        }, 1500);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    if (authState === 'checking') {
        return <>
            <h1 className="text-3xl font-semibold">Login Page</h1>
            <h1 className="text-xl font-semibold"> Cargando...</h1>
        </>
    }

    return (
        <>
            <h1 className="text-3xl font-semibold">Login Page</h1>
            {
                (authState === 'authenticated')
                    ?
                    <> <span>Autenticado como: {JSON.stringify(user, null, 2)} </span> </>
                    :
                    <> <span className="text-rose-500 font-semibold text-lg">No Autenticado </span> </>
            }
            <br />
            {
                (authState === 'authenticated') 
                ?
                <>
                <button onClick={logout} className="p-2 rounded bg-rose-400 text-white mr-2"> Cerrar Sesion </button>
                </>
                :
                <>
                <button onClick={()=>login('Renier@gmail.com', '123')}
                className="p-2 rounded bg-green-400 text-white mr-2"
                > Iniciar Sesion </button>
                </>
            }
        </>
    )
}
