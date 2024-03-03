import { useState } from "react"

export const Contador = () => {
    const [valor, setValor] = useState<number>(10);

    const funcMasMenos = (numero:number) =>{
        setValor( valor + numero)
    }

    return (
        <>
            <h1 className="text-3xl font-semibold">Contador</h1>
            <span> El valor del contador es <strong> {valor} </strong> </span>
            <br />
            <button className="p-2 rounded bg-rose-400 text-white mr-2"
            onClick={()=>funcMasMenos(-1)}
            >-1</button>
            <button className="p-2 rounded bg-sky-400 text-white"
            onClick={()=>funcMasMenos(1)}
            >+1</button>
        </>
    )
}
