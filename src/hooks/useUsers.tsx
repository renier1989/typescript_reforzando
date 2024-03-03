import { useEffect, useRef, useState } from "react";
import { ReqResUserListResponse, User } from "../interfaces";
import axios from "axios";

const loadUser = async (page: number = 1): Promise<User[]> => {
    try {
        const { data } = await axios<ReqResUserListResponse>('https://reqres.in/api/users',
            {
                params: { page: page }
            }
        );
        return data.data
    } catch (error) {
        console.log(error);
        return [];
    }
}

export const useUsers = () => {
    const [users, setUsers] = useState<User[]>([])
    const currentPageRef = useRef(1);
    useEffect(() => {
        // loadUser().then(users => console.log(users));
        // loadUser().then(users => setUser(users)); // una version comun para setear en el state los usuarios de la peticion

        // una version mas moderna de sertear usuario al state.  esto se hace porque solo se le pasa un solo aprametro que son los users de la peticion y como solo retorna eso se le asigna autematicamente al setUser haciendo la referencia del metodo
        loadUser(currentPageRef.current).then(setUsers);
    }, [])

    const nextPage = async () => {
        currentPageRef.current++; // incremento el valor de currentPge en el REF
        const users = await loadUser(currentPageRef.current); // consulto nuevamente los usuarios de esa pagina
        if (users.length > 0) {
            setUsers(users) // si hay usuarios entonces los seteo en el state
        } else {
            currentPageRef.current--; // si no hay usuario entonces el incremento que hice, lo revierto y los regreso a la pagina anterior
        }
    }
    const prevPage = async () => {
        if (currentPageRef.current <= 1) return;
        currentPageRef.current--;
        const users = await loadUser(currentPageRef.current);
        setUsers(users)
    }

    return {
        users,
        nextPage,
        prevPage
    }
}
