import React from 'react';
import Link from 'next/link';

const Header = (props) => {
    return (
        <React.Fragment>
            <header className="bg-black p-4 opacity-80">
                <div className="container mx-auto">
                    <Link href="/">
                        <a>
                            <img className="block m-auto" src="/logo_palpitebox.png" alt="PalpiteBox" />
                        </a>
                    </Link>
                </div>
            </header>
            <nav className="bg-black shadow-lg opacity-90 py-6">
                <ul className="flex justify-center space-x-6 ">
                    <li className="rounded-md font-medium text-white bg-gradient-to-r from-red-500 to-yellow-500">
                        <Link href="/about">
                            <a className="block w-24 py-2 text-center" >Sobre</a>
                        </Link>
                    </li>
                    <li className="rounded-md font-medium text-white bg-gradient-to-r from-red-500 to-yellow-500">
                        <Link href="/contact">
                            <a className="block w-24 py-2 px-4 text-center">Contato</a>
                        </Link>
                    </li>
                    <li className="rounded-md font-medium text-white bg-gradient-to-r from-red-500 to-yellow-500">
                        <Link href="/rating">
                            <a className="block w-24 py-2 text-center">Pesquisa</a>
                        </Link>
                    </li>
                </ul>
            </nav>
        </React.Fragment>
    )
}

export default Header;