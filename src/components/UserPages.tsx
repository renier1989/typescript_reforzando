import { useUsers } from "../hooks/useUsers";
import { UserRow } from "./UserRow";

export const UserPages = () => {

    const { users, nextPage, prevPage } = useUsers()

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
            <div>
                <button className="p-2 rounded bg-blue-400 text-white mr-2" onClick={prevPage}>Prev</button>
                <button className="p-2 rounded bg-blue-400 text-white mr-2" onClick={nextPage}>Next</button>
            </div>
        </>
    )
}