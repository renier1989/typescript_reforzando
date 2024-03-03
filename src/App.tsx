import { Contador } from "./components/Contador";
import { ContadorConHook } from "./components/ContadorConHook";
import { LoginPage } from "./components/LoginPage";
import { UserPages } from "./components/UserPages";
import { Funciones } from "./typescript/Funciones";
import { ObjetosLiterales } from "./typescript/ObjetosLiterales";
import { TiposVariables } from "./typescript/TiposVariables";

const App = () => {
  return (
    <div className="mt-2">
      <h1 className="text-5xl font-semibold">Reforzando TS + React</h1>
      <hr className="my-2" />
      <UserPages/>
      <hr className="my-2" />
      <LoginPage/>
      <hr className="my-2" />
      <Contador/>
      <hr className="my-2" />
      <ContadorConHook/>
      <hr className="my-2" />
      <TiposVariables />
      <hr className="my-2" />
      <ObjetosLiterales />
      <hr className="my-2" />
      <Funciones />
      

    </div>
  )
}

export default App;