import React from 'react';
import Link from 'next/link';
import useSWR from "swr";
import PageTitle from '../common/PageTitle';

const getData = (...args) => fetch(...args).then(res => res.json());

const Index = () => {
    const { data, error } = useSWR('/api/get-promo', getData);
    return (
        <section>
            <PageTitle title="Seja bem-vindo!" />
            <h1 className="text-lg text-center text-gray-700 py-6 w-72 m-auto">O restaurante X sempre busca por atender melhor seus clientes. Por isso, estamos sempre abertos a ouvir a sua opinião.</h1>
            <Link href="/rating">
                <a className="rounded-3xl font-medium text-white bg-gradient-to-r from-red-500 to-yellow-500 block w-72 m-auto px-8 py-3 text-center shadow-2xl">Dar opinião ou sugestão</a>
            </Link>
            {!data && (
                <p className="text-lg  text-center text-red-500  w-72 mt-4 m-auto">Carregando...</p>
            )}
            {!error && data && data.hasPromo && (
                <p className="text-lg text-center text-gray-700 py-6 w-72 m-auto">Ao dar sua opinião e/ou sugestão,  ganhe 10% na sua próxima compra. <span className="text-red-500 block">Texto dinâmico vindo da planilha.</span> </p>
            )}
        </section>
    )
}

export default Index;