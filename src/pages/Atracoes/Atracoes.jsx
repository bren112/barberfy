import React, { useEffect, useState } from 'react';
import './Atracoes.css';
import djmoi from './moi2.png';

function Atracoes() {
    const [progress, setProgress] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false); // Estado para controle do modal

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress(prevProgress => (prevProgress < 100 ? prevProgress + 1 : 0));
        }, 100);

        return () => clearInterval(interval); 
    }, []);

    // Função para abrir o modal
    const openModal = () => {
        setIsModalOpen(true);
    };

    // Função para fechar o modal
    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="atracoes">
            <br />
            <h1 id="title">DJ MOI</h1>
            <br />
            
            {/* Imagem que abre o modal ao ser clicada */}
            <img 
                id="imgsobre" 
                src={djmoi} 
                alt="DJ Moi" 
                onClick={openModal} 
                style={{ cursor: 'pointer' }} 
            />

            {/* Modal */}
            {isModalOpen && (
                <div className="modal" onClick={closeModal}>
                    <div className="modal-content" onClick={e => e.stopPropagation()}>
                        <img 
                            src={djmoi} 
                            alt="DJ Moi" 
                            style={{ width: '100%', height: 'auto' }} 
                        />
                    </div>
                </div>
            )}

            <div className="loading-circle">
                <div className="circle"></div>
            </div>
        </div>
    );
}

export default Atracoes;
