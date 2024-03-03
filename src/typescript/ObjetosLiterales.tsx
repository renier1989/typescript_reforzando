interface IPersona {
    nombreCompleto: string;
    edad:number;
    direccion: IDireccion;
}

interface IDireccion {
    pais: string;
    casaNo: number;
}

export const ObjetosLiterales = () => {
    const persona:IPersona = {
        nombreCompleto: 'Renier Vargas',
        edad: 35,
        direccion: {
            pais: 'Venezuela',
            casaNo: 561
        }
    }
  return (
    <>
    <h1 className="text-3xl font-semibold">ObjetosLiterales</h1>
    <code >
        <pre className="bg-gray-100 p-3 rounded">
            {JSON.stringify(persona, null, 2)}
        </pre>
    </code>
    </>
  )
}
