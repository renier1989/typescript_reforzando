import axios from "axios"
import { useEffect } from "react"
import { ReqResUserListResponse } from "../interfaces"

const loadUser = async () => {
    try {
        const { data } = await axios<ReqResUserListResponse>('https://reqres.in/api/users');
        return data.data
    } catch (error) {
        console.log(error);
        return;
    }
}

export const UserPages = () => {
    useEffect(() => {
        loadUser().then(users => console.log(users));
    }, [])


    return (
        <>
            <h1 className="text-3xl font-semibold">Lista de usuarios, Request API</h1>

            <table className="table-auto" border={1}>
                <thead>
                    <tr>
                        <th>Avatar</th>
                        <th>Nombre</th>
                        <th>Edad</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>avatar</td>
                        <td>Malcolm Lockyer</td>
                        <td>1961</td>
                    </tr>
                    <tr>
                        <td>avatar 1</td>
                        <td>The Eagles</td>
                        <td>1972</td>
                    </tr>
                    <tr>
                        <td>avatar 2</td>
                        <td>Earth, Wind, and Fire</td>
                        <td>1975</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}
