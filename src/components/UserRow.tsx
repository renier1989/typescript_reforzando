import { User } from "../interfaces";


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