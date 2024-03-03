import axios from "axios"
import { useEffect, useState } from 'react';
import type { ReqResUserListResponse, User } from "../interfaces"

const loadUser = async (): Promise<User[]> => {
    try {
        const { data } = await axios<ReqResUserListResponse>('https://reqres.in/api/users');
        return data.data
    } catch (error) {
        console.log(error);
        return [];
    }
}

export const UserPages = () => {
    const [users, setUsers] = useState<User[]>([])
    useEffect(() => {
        // loadUser().then(users => console.log(users));
        // loadUser().then(users => setUser(users)); // una version comun para setear en el state los usuarios de la peticion

        // una version mas moderna de sertear usuario al state.  esto se hace porque solo se le pasa un solo aprametro que son los users de la peticion y como solo retorna eso se le asigna autematicamente al setUser haciendo la referencia del metodo
        loadUser().then(setUsers);
    }, [])


    return (
        <>
            <h1 className="text-3xl font-semibold">Lista de usuarios, Request API</h1>

            <table className="table-auto" border={1}>
                <thead>
                    <tr>
                        <th>Avatar</th>
                        <th>Nombre</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map(user => (
                            <UserRow key={user.id} user={user} />
                        ))
                    }
                </tbody>
            </table>
        </>
    )
}


// aqui se define un componente que contiene los rows de los usuarios
// esto se hacer para mejorar el rendimiento y asignar un componente por cada resutlado. y poder manipular o hacer ejecucion solo sobre ese componente y evitar re-renders.
// tambie se debe definir un interface que me diga cuales son las propos que recibe este componente
interface Props {
    user: User
}
export const UserRow = ({ user }: Props) => {
    const { avatar, first_name, last_name, email } = user
    return (
        <tr className=" rounded shadow">
            <td> <img className="w-20 rounded-lg" src={avatar} alt={first_name} /> </td>
            <td> <span className="ml-4 font-semibold text-xl text-gray-500"> {first_name} {last_name}</span></td>
            <td className="text-lg text-gray-400 font-semibold ">{email}</td>
        </tr>
    );
}