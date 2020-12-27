import React, { useState } from 'react';
import StarRating from '../common/StarRating';
import PageTitle from '../common/PageTitle';

const Rating = () => {

    const [form, setForm] = useState({
        Nome: '',
        Email: '',
        Whatsapp: '',
        Suestao: '',
        Nota: 0
    });

    const [success, setSuccess] = useState(false);
    const [retorno, setRetorno] = useState({});

    const clear = () => {
        setSuccess(false);
        setRetorno({});
        setForm({
            Nome: '',
            Email: '',
            Whatsapp: '',
            Suestao: '',
            Nota: 0
        })
    }

    const onChange = evt => {
        const name = evt.target.name;
        const value = evt.target.value;
        setForm(old => ({ ...old, [name]: value }));
    }

    const save = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch('/api/save', {
                method: 'POST',
                body: JSON.stringify(form)
            });
            const data = await res.json();
            setSuccess(true);
            setRetorno(data);
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <section>
            <PageTitle title="Pesquisa" />
            <header>
                <h1 className="text-2xl text-center text-gray-700 py-0 w-72 m-auto">
                    Críticas e sugestões
                </h1>
            </header>
            <p className="text-lg text-center  text-gray-700 py-6 m-auto">O restaurante X sempre busca por atender melhor seus clientes. Por isso, estamos sempre abertos a ouvir a sua opinião.</p>
            {!success && (
                <form autoComplete="off" onSubmit={save}>
                    <div className="flex-col p-4 w-96 m-auto">
                        <div className="text-gray-700 text-lg p-3">
                            <label>Nome:</label>
                        </div>
                        <div>
                            <input
                                className="p-4 bg-gray-900 rounded-3xl w-full focus:outline-none"
                                type="text"
                                name="Nome"
                                value={form.Nome}
                                onChange={onChange}
                                required
                            />
                        </div>

                        <div className="text-gray-700 text-lg p-3">
                            <label>E-mail:</label>
                        </div>
                        <div>
                            <input
                                className="p-4 bg-gray-900 rounded-3xl w-full focus:outline-none"
                                type="text"
                                name="Email"
                                value={form.Email}
                                onChange={onChange}
                                required
                            />
                        </div>

                        <div className="text-gray-700 text-lg p-3">
                            <label>Whatsap:</label>
                        </div>
                        <div>
                            <input
                                className="p-4 bg-gray-900 rounded-3xl w-full focus:outline-none"
                                type="text"
                                name="Whatsapp"
                                value={form.Whatsapp}
                                onChange={onChange}
                                required
                            />
                        </div>

                        <div className="text-gray-700 text-lg p-3">
                            <label>Critica ou sugestão:</label>
                        </div>
                        <div>
                            <textarea
                                className="p-4 bg-gray-900 rounded-3xl w-full focus:outline-none max-h-24"
                                name="Sugestao"
                                value={form.Sugestao}
                                onChange={onChange}
                            >

                            </textarea>
                        </div>

                        <div className="text-gray-700 text-lg p-3">
                            <label>Deixe sua nota:</label>
                        </div>
                        <div className="flex justify-center space-x-2 cursor-pointer">
                            <StarRating
                                selectedStars={form.Nota}
                                setSelectedStarts={(nota) => {
                                    setForm(old => ({ ...old, Nota: nota }));
                                }}
                            />
                        </div>
                        <button className="block w-72 m-auto my-4 rounded-3xl font-medium text-white bg-gradient-to-r from-red-500 to-yellow-500 px-8 py-3 shadow-2xl focus:outline-none">
                            Enviar critica ou sugestão
                        </button>
                    </div>
                </form>
            )}
            {
                success && (
                    <div className="w-1/4 m-auto p-4 text-green-500">
                        <p className="mb-4 ">Obrigado por contribuir com sua sugestão ou crítica.</p>

                        {retorno.Cupom && (
                            <div className="text-center mb-4 p-4 border border-green-400">
                                Seu cupom: <br />
                                <span className="font-bold">{retorno.Cupom}</span>
                            </div>
                        )}

                        {retorno.Promo && (
                            <div className="text-center mb-4 p-4 border border-green-400">
                                <span className="font-bold block mb-2">{retorno.Promo}</span>
                                <span className="italic">Tire um print ou foto desta tela e apresente ao garçon.</span>
                            </div>
                        )}

                        <button className="text-red-400 border border-red-400 rounded-2xl py-2 px-6" onClick={clear}>Voltar</button>
                    </div>
                )
            }
        </section >
    )
}

export default Rating;
