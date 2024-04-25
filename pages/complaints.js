import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useRouter } from 'next/router';
import 'tailwindcss/tailwind.css';


export default function Home() {
    const { register, handleSubmit, errors, reset } = useForm();
    // const router = useRouter();
    async function onSubmitForm(values) {
        let config = {
            method: 'post',
            url: `https://www.bybconsultingtraining.com/api/buzon`,
            headers: {
                'Content-Type': 'application/json',
            },
            data: values,
        };
        console.log(values);
        try {
            const response = await axios(config);
            console.log(response);
            if (response.status == 200) {
                reset();
                router.push('/');
            }
        } catch (err) {
            console.error(err);
        }
    }

    return (

        <div className="b py-16 bg-gray-50 px-4 sm:px-6 h-screen w-screen flex justify-center items-center">
            <div className="mx-auto w-full max-w-2xl rounded-xl bg-white p-8 shadow">
                <h2 className="noo-sh-title">Buzon de quejas y sugerencias</h2>
                <p>Por favor llene el formulario y nos pondremos en contacto con usted a la brevedad.</p>
                <br />
                <p>
                    <i className=""></i><strong>Llámenos:</strong>{" "}
                    <a href="tel:5566103088">5566103088</a>
                </p>
                <br />
                <br />

                <form
                      onSubmit={handleSubmit(onSubmitForm)}
                    className="grid grid-cols-1 gap-y-6">
                    <div>
                        <label for="name" className="sr-only">
                            Nombre completo
            </label>
                        <input
                            type="text"
                            name="name"
                            ref={register({
                                required: {
                                    value: true,
                                    message: 'Debes ingresar tu nombre.',
                                },
                            })}
                            className={`block w-full shadow py-3 px-4 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md focus:outline-none focus:ring-2 ${errors.name ? 'ring-2 ring-red-500' : null
                                }`}
                            placeholder="Nombre completo"
                        />
                        <span className="text-red-400 text-sm py-2">
                            {errors?.name?.message}
                        </span>
                    </div>
                    <div>
                        <label for="email" className="sr-only">
                            Correo Electronico
            </label>
                        <input
                            name="email"
                            type="text"
                            ref={register({
                                required: {
                                    value: true,
                                    message: 'Debes ingresar tu dirección de correo electrónico.',
                                },
                                minLength: {
                                    value: 8,
                                    message: 'Esto no es suficiente para ser un correo electrónico.',
                                },
                                maxLength: {
                                    value: 120,
                                    message: 'Esto es demasiado largo.',
                                },
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: 'This needs to be a valid email address',
                                },
                            })}
                            className={`block w-full shadow py-3 px-4 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md focus:outline-none focus:ring-2 ${errors.email ? 'ring-2 ring-red-500' : null
                                }`}
                            placeholder="Correo Electronico"
                        />
                        <span className="text-red-400 text-sm py-2">
                            {errors?.email?.message}
                        </span>
                    </div>
                    <div>
                        <label for="phone" className="sr-only">
                            Telefono
            </label>
                        <input
                            type="text"
                            name="phone"
                            ref={register}
                            className="block w-full shadow py-3 px-4 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md focus:outline-none focus:ring-2"
                            placeholder="Telefono"
                        />
                    </div>
                    <div>
                        <label for="message" className="sr-only">
                            Quejas y sujerencias
            </label>
                        <textarea
                            name="message"
                            rows="4"
                            ref={register({
                                required: {
                                    value: true,
                                    message: 'Debes ingresar tu mensaje.',
                                },
                                maxLength: {
                                    value: 1000,
                                    message: "Tu mensaje no puede tener más de 1000 caracteres",
                                },
                                minLength: {
                                    value: 50,
                                    message: '¡Tu mensaje debe ser más largo que esto!',
                                },
                            })}
                            className={`block w-full shadow py-3 px-4 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md focus:outline-none focus:ring-2 ${errors.message ? 'ring-2 ring-red-500' : null
                                }`}
                            placeholder="Quejas y sugerencias"></textarea>
                        <span className="text-red-400 text-sm py-2">
                            {errors?.message?.message}
                        </span>
                    </div>

                    
                    
                    
                    <div>
                        <button
                            type="submit"
                            className="inline-flex justify-center py-3 px-6 border border-transparent shadow text-base font-medium rounded-md text-white bg-yellow-500 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                            Enviar
            </button>
                    </div>
                </form>
            </div>
        </div>
    );
}