export const Funciones = () => {

    const sumar = (a: number, b:number): number => {
        return a + b;
    }
    const sumarString = (a: number, b:number): string => {
        return `${a + b}`;
    }

    return (
        <>
            <h1 className="text-3xl font-semibold">Funciones</h1>
            <span>
                El resultado de la funcion de la suma es : {sumar( 1, 32)}, retorna un Number
            </span>
            <br />
            <span>
                El resultado de la funcion de la suma es : {sumarString( 1, 55)}, retorna un Strings
            </span>

        </>
    )
}
