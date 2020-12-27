import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-black opacity-95 py-4">
            <div className="container mx-auto">
                <h3 className="text-lg text-center text-gray-900 py-6 pb-0">
                    <span>Projeto desenvolvido por Felipe Cardoso de Oliveira</span>
                    <a className="text-red-500" href="https://www.linkedin.com/in/felipe-cardoso-7515b61a6/"> Linkedin </a>/
                    <a className="text-red-500" href="https://github.com/felipecardosodeoliveira"> Github </a>
                </h3>
                <div className="flex justify-center space-x-12 p-4">
                    <img className="w-40" src="/logo_semana_fsm.png" alt="PalpiteBox" />
                    <img className="w-40" src="/logo_devpleno.png" alt="PalpiteBox" />
                </div>
            </div>
        </footer>
    )
}

export default Footer;