export const TiposVariables = () => {
    const nombre: string = 'Renier Vargas';
    const edad: number = 34;
    const isActive: boolean = true;

    // // poderes esta infiriendo que es de tipo string y number
    // const poderes = ['renier', 12];

    // aqui se le dice que poderes es de tipo arreglo de strings
    const poderes: string[] = [];

    return (
        <>
            <h1 className="text-3xl font-semibold">TiposBasicos</h1>
            {nombre} , {edad} , {isActive ? 'Activo' : 'Inactivo'}
            <br />
            {poderes.join(', ')}
        </>
    )
}
