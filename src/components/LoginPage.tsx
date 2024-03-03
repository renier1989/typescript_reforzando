import { useAuthStore } from "../store/auth.store"

export const LoginPage = () => {
    // asi es como se consumen los state en un store de Zustand
    const authState = useAuthStore(state => state.status)

  return (
    <>
    <h1 className="text-3xl font-semibold">Login Page</h1>
    <span>
        {authState}
    </span>
    </>
  )
}
