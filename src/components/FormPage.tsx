import { useForm } from "react-hook-form"

type FormInputs = {
    email: string;
    password: string;
}

export const FormPage = () => {
    const { register, handleSubmit, formState , watch } = useForm<FormInputs>({
        defaultValues: {
            email: 'reneir1989@gmail.com',
            password: '123qwerty'
        }
    });

    console.log(watch('email'));
    

    const onSubmit = (myForm: FormInputs) => {
        console.log({ myForm });
    }

    return (
        <>
            <h1 className="text-3xl font-semibold">Formularios</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-[30%]">
                <input {...register('email')} className="border outline-1 mb-2 p-2 rounded " type="text" placeholder="Email" />
                <input {...register('password')} className="border outline-1 mb-2 p-2 rounded " type="password" placeholder="Password" />
                <button type="submit" className="p-2 rounded bg-rose-400 text-white mr-2">Ingresar</button>
            </form>
            <pre>
                {JSON.stringify(formState, null, 2)}
            </pre>
        </>
    )
}
