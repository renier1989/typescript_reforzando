import { useState } from "react";

interface Options {
    initial? : number
}

export const useCounter = ({initial = 0}: Options) => {
    const [valor, setValor] = useState<number>(initial);

    const funcMasMenos = (numero:number) =>{
        const newvalue = valor + numero;
        if(newvalue < 0) return;
        setValor( valor + numero)
    }

    return { valor, funcMasMenos}
}
